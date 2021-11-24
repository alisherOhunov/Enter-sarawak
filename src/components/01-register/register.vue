<template>
  <div :class="{ loading: submitting }">
    <v-stepper class="stepperSteps" v-model="stepperSteps">
      <v-stepper-items>
        <v-stepper-content class="step-changes" step="1">
          <account-registration
            v-on:submitted="accountSubmit"
            v-if="stepperSteps === 1"
          />
        </v-stepper-content>
        <v-stepper-content step="2">
          <corporate-registration
            v-on:submitted="corporateSubmit"
            v-if="stepperSteps === 2"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="8" lg="6">
        <div class="text-center">
          <v-dialog v-model="registrationFailDialog" max-width="390">
            <v-card>
              <v-card-title class="headline">
                {{ registrationErrorTitle }}
              </v-card-title>
              <v-card-text>
                {{ registrationErrorText }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  v-if="showBackBtn"
                  color="green darken-1"
                  text
                  @click="backToAccountRegistration"
                >
                  Back
                </v-btn>
                <v-btn
                  v-if="!showBackBtn"
                  color="green darken-1"
                  text
                  @click="registrationFailDialog = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="8" lg="6">
        <div class="text-center">
          <v-dialog v-if="dialog" v-model="dialog" width="320">
            <v-card>
              <v-card-text class="approval-text">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <h2>
                  COMPANY SUBMITTED <br />
                  for APPROVAL
                </h2>
                <p>
                  Upon approval, your company will be notified by email and
                  allowed to apply <br />
                  for employee entry permits
                </p>
              </v-card-text>

              <v-divider></v-divider>
              <v-card-actions>
                <v-btn class="continue-btn" text @click="dialog = false">
                  continue
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios"
import { Actions } from "../../constants"
import AccountRegistration from "./account-registration"
import CorporateRegistration from "./corporate-registration.vue"
export default {
  name: "Register",
  components: {
    AccountRegistration,
    CorporateRegistration
  },
  data() {
    return {
      showBackBtn: false,
      REGISTER_USER: process.env.VUE_APP_API_BASE_URLS,
      ACCOUNT_APIS: process.env.VUE_APP_BASE_ACCOUNT_URLS,
      stepperSteps: this.$store.state.stepper,
      registrationErrorTitle: "",
      registrationErrorText: "",
      registrationFailDialog: false,
      dialog: false,
      disabled: false,
      userInfo: {},
      accountPassed: false,
      reg_number: String,
      logoErr: String,
      submitting: false
    }
  },
  created() {
    setInterval(() => {
      this.stepperSteps = this.$store.state.stepper
    }, 1000)
  },
  methods: {
    accountSubmit(form) {
      this.$store.dispatch(Actions.SET_ACCOUNT_DETAILS, form)
      this.$store.state.stepper = 2
      this.userInfo = {
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone.international,
        email: form.email,
        password: form.password
      }
    },
    prepareCorporateData: function(form) {
      const formData = new FormData()
      formData.append("type_id", form.type_id)
      formData.append("type", 2)
      formData.append("industry_id", form.industry_id)
      formData.append("country_id", form.country)
      formData.append("reg_number", form.reg_number)
      formData.append("mobile", form.mobilePhone.international)
      formData.append("fax_number", form.fax.international)
      formData.append("address", form.address)
      formData.append("address_2", form.address_2)
      formData.append("email", form.email)
      formData.append("name", form.name)
      formData.append("city", form.city)
      formData.append("state", form.state)
      formData.append("logo", form.logo)
      // @LOGO must be an image error
      formData.append("postcode", form.postCode)
      for (let i = 0; i < form.business_services.length; i++) {
        if (typeof form.business_services[i] === Object) {
          formData.append(
            `business_services[${i}]`,
            form.business_services[i].value
          )
        } else {
          formData.append(
            "business_services[" + i + "][text]",
            form.business_services[i]
          )
        }
      }
      return formData
    },
    async sendCorporateData(form) {
      const formData = this.prepareCorporateData(form)
      try {
        const postResponse = await axios.post(
          `${this.ACCOUNT_APIS}/profiles`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.$store.state.appToken.accountToken}`
            }
          }
        )

        if (postResponse.status !== 200) {
          return false
        }
      } catch (e) {
        if (e?.response?.status === 422) {
          console.log("422 error working")
          this.$store.dispatch(Actions.SET_SERVER_ERRORS, e.response.data)
        }
      }
    },
    backToAccountRegistration() {
      this.registrationFailDialog = false
      this.$store.state.stepper = 1
    },
    async corporateSubmit(form) {
      let registerResult = null
      if (this.submitting) {
        return
      }
      await this.$store.dispatch(Actions.SET_CORPORATE_DETAILS, form)
      if (!this.accountPassed) {
        registerResult = await this.registerUser()
      }
      if (registerResult === "PHONE_REGISTERED") {
        this.showBackBtn = true
        this.$store.state.phoneError = "Phone has been already taken"
        this.registrationErrorTitle = "Phone already exist."
        this.registrationErrorText =
          "An account already exists with this mobile phone number. Please check your phone number."
        this.registrationFailDialog = true
        return
      }

      if (registerResult === "EMAIL_REGISTERED") {
        this.showBackBtn = true
        this.$store.state.emailError = "Email has been already taken"
        this.registrationErrorTitle = "Account already exist."
        this.registrationErrorText =
          "An account already exist with this email. Please check your email."
        this.registrationFailDialog = true
        return
      }
      if (registerResult === "ERROR") {
        this.registrationErrorTitle = "An unknown error occured"
        this.registrationErrorText = "Please check all fields and try again!"
        this.registrationFailDialog = true
        this.showBackBtn = true
        return
      }

      if (registerResult === "SUCCESS") {
        this.accountPassed = true
        this.registrationErrorTitle = null
        this.registrationErrorText = null
        this.registrationFailDialog = false
        this.showBackBtn = false
      }
      if (this.accountPassed) {
        let corpResult = await this.sendCorporateData(form)
        if (corpResult === null) {
          this.dialog = true
        } else {
          alert(this.$store.state.serverErrors)
        }
      }
    },
    async registerUser() {
      this.submitting = true
      try {
        const response = await axios.post(
          `${this.REGISTER_USER}/fw/auth/register`,
          this.userInfo,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        await this.$store.dispatch(Actions.LOGIN, response.data)
      } catch (e) {
        if (e?.response?.status === 422) {
          for (let i = 0; i < e.response.data.errors.length; i++) {
            const err = e.response.data.errors[i]
            if (
              err.message === "The email has already been taken." &&
              err.field === "email"
            ) {
              return "EMAIL_REGISTERED"
            }
            if (
              err.message === "phone has been registered" &&
              err.field === "phone"
            ) {
              return "PHONE_REGISTERED"
            } else {
              return "ERROR"
            }
          }
        }
        return "ERROR"
      } finally {
        this.submitting = false
      }
      return "SUCCESS"
    }
  }
}
</script>
<style>
.fa-check-circle {
  color: rgb(29, 179, 63);
  font-size: 32px;
  margin: 0 auto;
  padding: 15px 10px 10px;
}
.continue-btn {
  margin: 0 auto;
  font-weight: bold;
}
.approval-text {
  text-align: center;
}
.approval-text :nth-child(2) {
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  font-weight: 400;
}
.approval-text :nth-child(3) {
  margin-bottom: -10px;
  color: rgb(0, 0, 0);
  font-weight: 300;
}
.loading {
  opacity: 0.4;
  pointer-events: none;
}
.v-stepper {
  box-shadow: none;
}
.step-changes {
  padding: 0px;
}
</style>
