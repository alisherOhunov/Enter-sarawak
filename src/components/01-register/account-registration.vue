<template>
  <div class="registration-details">
    <div class="register-title-xs d-block d-sm-none">
      <h1>REGISTER ACCOUNT</h1>
    </div>
    <v-btn class="login-btn" type="button" dark @click="login">
      LOGIN
    </v-btn>
    <h1 class="d-none d-sm-block account-registration-title mt-2">
      ACCOUNT REGISTRATION
    </h1>
    <v-container>
      <v-form @submit.prevent="submit" ref="form" v-model="formValid">
        <v-text-field
          @input="validateFullName"
          ref="fullName"
          v-model.trim="fullName"
          label="full name *"
          :error-messages="fullNameErrors"
          :rules="fullNameRules"
          type="text"
        ></v-text-field>

        <vue-tel-input-vuetify
          v-model="phoneNational"
          :defaultCountry="phoneCountryCode"
          @input="validatePhone"
          @change="phoneErrorCheck"
          :rules="telInputRules"
          :error-messages="phoneError"
          label="mobile phone no. *"
        >
        </vue-tel-input-vuetify>
        <v-text-field
          @change="emailErrorCheck"
          ref="email"
          v-model="email"
          label="email - optional"
          :rules="emailRules"
          :error-messages="emailError"
        ></v-text-field>

        <v-text-field
          ref="password"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          label="password *"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <div class="next-btn">
          <v-btn color="#000065" type="submit" block dark>Next</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { NAME_SEPARATORS, Routes } from "../../constants"
import { validate } from "../../../ts-shared/lib"

export default {
  name: "account-registration",
  props: ["errors"],
  data() {
    return {
      REGISTER_USER: process.env.VUE_APP_API_bASE_URLS,
      formValid: false,
      phone: this.$store.state.accountDetails.phone,
      telInputRules: [
        v => !!v || "mobile phone number is required",
        () => this.phoneValid || "mobile phone number is not valid"
      ],
      emailError: "",
      phoneError: "",
      phoneNational: "",
      phoneCountryCode: "",
      phoneValid: false,
      first_name: "",
      last_name: "",
      isFullNameValid: null,
      fullNameErrors: null,
      fullName: "",
      fullNameRules: [v => !!v || "full name is required"],
      email: this.$store.state.accountDetails.email,
      emailRules: [v => !v || /.+@.+\..+/.test(v) || "email must be valid"],
      showPassword: false,
      password: "",
      passwordRules: [
        value => !!value || "password is required" || "",
        value =>
          value.length >= 8 || "password shouldn't be less than 8 characters"
      ]
    }
  },
  computed: {
    form() {
      return {
        fullName: this.fullName,
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        password: this.password
      }
    }
  },
  created() {
    if (Object.keys(this.$store.state.accountDetails).length !== 0) {
      this.phoneError = this.$store.state.phoneError
      this.emailError = this.$store.state.emailError
      ;(this.phoneNational = this.$store.state.accountDetails.phone.national),
        (this.phoneCountryCode = this.$store.state.accountDetails.phone.countryCode),
        (this.password = this.$store.state.accountDetails.password)
      this.phoneValid = this.$store.state.accountDetails.phone.isValid
      this.fullName = this.$store.state.accountDetails.fullName
    }
  },
  mounted() {
    if (Object.keys(this.$store.state.accountDetails).length !== 0) {
      this.$refs.form.validate()
    }
  },
  methods: {
    async login() {
      await this.$router.push({ name: Routes.PAGE_LOGIN.name })
    },
    phoneErrorCheck() {
      this.phoneError = ""
      this.$store.state.phoneError = ""
    },
    emailErrorCheck() {
      this.emailError = ""
      this.$store.state.emailError = ""
    },
    splitName() {
      this.first_name = ""
      this.last_name = ""

      let nameWithoutSeparator = this.fullName
      for (let separator of NAME_SEPARATORS) {
        if (nameWithoutSeparator.includes(separator)) {
          nameWithoutSeparator = nameWithoutSeparator.replace(separator, " ")
        }
      }

      const split = nameWithoutSeparator.split(/\s/)

      this.first_name = split[0]
      if (split.length < 2) {
        return
      }

      split.splice(0, 1)
      this.last_name = split.join(" ")
    },
    validateFullName() {
      this.splitName()
      this.validateFirst_name()
      if (this.isFullNameValid) {
        this.validateLast_name()
      }
    },
    validateFirst_name() {
      this.isFullNameValid = false
      this.fullNameErrors = null

      const result = validate(this.first_name).notEmpty(
        "Please enter your first name."
      )

      if (!result.isValid) {
        this.fullNameErrors = result.errorMessages
        return
      }

      this.isFullNameValid = true
    },
    validateLast_name() {
      this.isFullNameValid = false
      this.fullNameErrors = null

      const result = validate(this.last_name).notEmpty(
        "Please enter your last name."
      )

      if (!result.isValid) {
        this.fullNameErrors = result.errorMessages
        return
      }

      this.isFullNameValid = true
    },
    submit() {
      this.validateFullName()
      this.$refs.form.validate()
      if (this.formValid) {
        this.$emit("submitted", this.form)
      } else {
        this.$store.state.stepper = 1
      }
    },
    validatePhone(formattedNumber, phoneObject) {
      if (phoneObject.isValid) {
        this.phone = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.phoneValid = phoneObject.isValid
      } else {
        this.phoneValid = phoneObject.isValid
        this.phone = { isValid: false }
      }
    }
  }
}
</script>
<style scoped>
.login-btn {
  margin-top: 20px;
}
@media screen and (min-width: 500px) {
  .login-btn {
    margin-left: 80%;
  }
}
.account-registration-title {
  text-align: center;
}
.next-btn {
  width: 270px;
  margin: 90px auto 0;
}

.register-title-xs {
  height: 65px;
  text-align: center;
  color: white;
  background: linear-gradient(90deg, #6a0000, #010156);
}

@media screen and (min-width: 800px) {
  .registration-details {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
