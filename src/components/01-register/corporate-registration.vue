<template>
  <v-container>
    <div class="corporate-registration-body">
      <div class="base-logo-blog">
        <div
          class="image-input"
          :style="{ 'background-image': `url(${companyImg})` }"
          @click="chooseImage"
        >
          <span v-if="!companyImg" class="placeholder-img"
            ><img
              class="logo"
              src="../../assets/image-file-upload.png"
              alt="logo"
          /></span>
          <input
            accept="image/*"
            class="image-upload"
            ref="fileInput"
            type="file"
            @input="onSelectFile"
          />
        </div>
        <span class="logoError">{{ logoValidationError }}</span>
      </div>
      <h2 class="account-registration-title mt-8">CORPORATE REGISTRATION</h2>
      <v-form @submit.prevent="submit" ref="form" v-model="formValid">
        <v-text-field
          ref="name"
          v-model="name"
          :rules="nameRules"
          label="corporate name *"
        >
        </v-text-field>
        <v-row>
          <v-col cols="6" sm="6">
            <div
              class="image-input company-img"
              :style="{ 'background-image': `url(${corporateLogo})` }"
              @click="chooseImageFile"
            >
              <span
                v-if="!corporateLogo"
                class="placeholder-img placeholderIcon"
                ><img class="logo" src="../../assets/image-file-upload.png"
              /></span>
              <input
                accept="image/*"
                class="image-upload"
                ref="fileInputImage"
                type="file"
                @input="onSelectFileImage"
              />
            </div>
            <v-text-field
              class="input-company-no"
              ref="reg_number"
              v-model="reg_number"
              :rules="reg_numberRules"
              label="company no *"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6">
            <v-text-field
              ref="email"
              v-model="email"
              :rules="emailRules"
              label="corporate email *"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="6">
            <v-autocomplete
              ref="industry_id"
              v-model="industry_id"
              :rules="industry_idRules"
              :items="industriesList"
              item-text="name"
              item-value="id"
              label="industry *"
              placeholder="Select..."
            ></v-autocomplete>
          </v-col>

          <v-col cols="6" sm="6">
            <v-autocomplete
              ref="type_id"
              v-model="type_id"
              :rules="type_idRules"
              label="corporate type *"
              :items="corporateTypesList"
              item-text="name"
              item-value="id"
              placeholder="Select..."
            ></v-autocomplete>
          </v-col>
          <v-col cols="6" sm="6">
            <vue-tel-input-vuetify
              v-model="phoneNational"
              :defaultCountry="phoneCountryCode"
              @input="validatePhone"
              :rules="mobilePhoneRules"
              label="telephone no. *"
            ></vue-tel-input-vuetify>
          </v-col>

          <v-col cols="6" sm="6">
            <vue-tel-input-vuetify
              v-model="faxNational"
              :defaultCountry="faxCountryCode"
              :rules="faxRules"
              label="Fax no. *"
              @input="validateFax"
            >
            </vue-tel-input-vuetify>
          </v-col>
          <v-col cols="12">
            <v-combobox
              hide-selected
              v-model="business_services"
              :items="allBusinessServices"
              clearable
              label="business services e.g. roadworks, general cleaning, soft drinks"
              multiple
              class="mb-n4"
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item.text || item }}</strong>
                </v-chip>
              </template>
            </v-combobox>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <i class="fa fa-question-circle "></i> what is this
                </span>
              </template>
              <span>Info about business services</span>
            </v-tooltip>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="addressRules"
              label="company registered address *"
            ></v-text-field>

            <v-text-field
              ref="address_2"
              v-model="address_2"
              label="company registered address 2"
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="6">
            <v-autocomplete
              ref="country"
              v-model="country"
              :rules="countryRules"
              :items="allCountriesList"
              item-value="value"
              item-text="text"
              label="country *"
              placeholder="Select..."
            ></v-autocomplete>
          </v-col>

          <v-col cols="6" sm="6">
            <v-text-field
              ref="state"
              v-model="state"
              :rules="stateRules"
              label="state *"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6">
            <v-text-field
              ref="city"
              v-model="city"
              :rules="cityRules"
              label="city *"
              placeholder="El Paso"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6">
            <v-text-field
              ref="postCode"
              v-model="postCode"
              :rules="postCodeRules"
              label="postcode *"
              placeholder="79938"
            ></v-text-field>
          </v-col>
          <v-btn class="apply-btn" color="#000065" @click="submit">
            <span class="white--text">Apply</span>
          </v-btn>
        </v-row>
      </v-form>
    </div>
  </v-container>
</template>
<script>
import axios from "axios"
import { Actions } from "../../constants"
export default {
  name: "corporateRegistration",
  data() {
    return {
      logoValidationError: "",
      logo: null,
      ACCOUNT_APIS: process.env.VUE_APP_BASE_ACCOUNT_URLS,
      corporateTypesList: [],
      industriesList: [],
      formValid: false,
      mobilePhone: this.$store.state.corporateDetails.mobilePhone,
      phoneNational: "",
      phoneCountryCode: "",
      fax: this.$store.state.corporateDetails.fax,
      faxNational: "",
      faxCountryCode: "",
      corporateLogo: "",
      companyImg: this.$store.state.corporateDetails.companyImg,
      name: this.$store.state.corporateDetails.name,
      nameRules: [v => !!v || "corprate name is required"],
      reg_number: this.$store.state.corporateDetails.reg_number,
      reg_numberRules: [v => !!v || "reg number is required"],
      email: this.$store.state.corporateDetails.email,
      emailRules: [
        v => !!v || "email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      industry_id: this.$store.state.corporateDetails.industry_id,
      industry_idRules: [v => !!v || "industry is required"],
      type_id: this.$store.state.corporateDetails.type_id,
      type_idRules: [v => !!v || "corporate type is required"],
      mobilePhoneRules: [
        v => !!v || "mobile phone number is required",
        () => this.phoneValid || "mobile phone number is not valid"
      ],
      faxRules: [
        v => !!v || "Fax is required",
        invalidFax =>
          (this.faxValid && /[0-9]/gi.test(invalidFax)) || "Fax is not Valid"
      ],
      business_services: this.$store.state.corporateDetails.business_services,
      country: this.$store.state.corporateDetails.country,
      countryRules: [v => !!v || "country is required"],
      state: this.$store.state.corporateDetails.state,
      stateRules: [v => !!v || "state is required"],
      city: this.$store.state.corporateDetails.city,
      cityRules: [v => !!v || "city is required"],
      postCode: this.$store.state.corporateDetails.postCode,
      postCodeRules: [v => !!v || "post code is required"],
      businessService: this.$store.state.corporateDetails.businessService,
      address: this.$store.state.corporateDetails.address,
      addressRules: [v => !!v || "registered address is required"],
      address_2: this.$store.state.corporateDetails.address_2
    }
  },
  computed: {
    allCountriesList() {
      return this.$store.state.countries.map(c => {
        return {
          text: c.name,
          value: c.id
        }
      })
    },
    allBusinessServices() {
      return this.$store.state.businessServices.map(c => {
        return {
          text: c.name,
          value: c.id
        }
      })
    },
    form() {
      return {
        business_services: this.business_services,
        reg_number: this.reg_number,
        type_id: this.type_id,
        industry_id: this.industry_id,
        mobilePhone: this.mobilePhone,
        fax: this.fax,
        email: this.email,
        name: this.name,
        address: this.address,
        address_2: this.address_2,
        businessService: this.businessService,
        city: this.city,
        state: this.state,
        postCode: this.postCode,
        country: this.country
      }
    }
  },
  methods: {
    // onValidateReg_number() {
    //   this.$store.state.serverErrors.reg_number = ""
    // },
    onValidateType_id() {
      this.$store.state.type_idValidationError = ""
    },
    onValidateIndustry_id() {
      this.$store.state.industry_idValidationError = ""
    },
    onValidateName() {
      this.$store.state.nameValidationError = ""
    },
    onValidateBusiness_services() {
      this.$store.state.business_services = ""
    },
    onValidateCountry_id() {
      this.$store.state.country_idValidationError = ""
    },
    onValidateAddress() {
      this.$store.state.addressValidationError = ""
    },
    onValidateAddress_2() {
      this.$store.state.address_2ValidationError = ""
    },
    onValidateEmail() {
      this.$store.state.emailValidationError = ""
    },
    onValidateCity() {
      this.$store.state.cityValidationError = ""
    },
    onValidateState() {
      this.$store.state.stateValidationError = ""
    },
    onValidatePostcode() {
      this.$store.state.postcodeValidationError = ""
    },
    remove(item) {
      this.business_services.splice(this.business_services.indexOf(item))
      this.business_services = [...this.business_services]
    },
    submit() {
      this.$refs.form.validate()
      if (this.formValid) {
        this.$emit("submitted", this.form)
      }
    },
    chooseImageFile() {
      this.$refs.fileInputImage.click()
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },
    onSelectFile() {
      this.$store.state.serverErrors.logo = null
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        this.logo = files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.companyImg = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit("input", files[0])
      }
    },
    onSelectFileImage() {
      const inputFiles = this.$refs.fileInputImage
      const files = inputFiles.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.corporateLogo = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit("input", files[0])
      }
    },
    validatePhone(formattedNumber, phoneObject) {
      this.$store.state.mobileValidationError = ""
      if (phoneObject.isValid) {
        this.mobilePhone = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.phoneValid = phoneObject.isValid
      } else {
        this.mobilePhone = { isValid: false }
        this.phoneValid = phoneObject.isValid
      }
    },
    validateFax(formattedNumber, phoneObject) {
      this.$store.state.fax_numberValidationError = ""
      if (phoneObject.isValid) {
        this.fax = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.faxValid = phoneObject.isValid
      } else {
        this.fax = { isValid: false }
        this.faxValid = phoneObject.isValid
      }
    }
  },
  created() {
    if (Object.keys(this.$store.state.corporateDetails).length !== 0) {
      this.phoneNational = this.$store.state.corporateDetails.mobilePhone.national
      this.phoneCountryCode = this.$store.state.corporateDetails.mobilePhone.countryCode
      this.phoneValid = this.$store.state.corporateDetails.mobilePhone.isValid
      this.faxNational = this.$store.state.corporateDetails.fax.national
      this.faxCountryCode = this.$store.state.corporateDetails.fax.countryCode
      this.faxValid = this.$store.state.corporateDetails.fax.isValid
    }
  },
  mounted() {
    if (Object.keys(this.$store.state.corporateDetails).length !== 0) {
      this.$refs.form.validate()
    }
    this.$store.dispatch(Actions.FETCH_COUNTRIES)
    this.$store.dispatch(Actions.FETCH_BUSINESS_SERVICES)
    axios
      .get(`${this.ACCOUNT_APIS}/industries`)
      .then(response => (this.industriesList = response.data.data))
    axios
      .get(`${this.ACCOUNT_APIS}/corporate-types`)
      .then(response => (this.corporateTypesList = response.data.data))
  }
}
</script>
<style scoped>
.account-registration-title {
  text-align: center;
  font-size: 35px;
}
.apply-btn {
  width: 270px;
  margin: 90px auto 0;
  background-color: red;
}
.image-input {
  display: block;
  width: 75px;
  height: 75px;
  margin: 0 auto;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  border-radius: 13px;
  border: 1px solid #757575;
}
.base-logo-blog {
  width: 15%;
  height: 75px;
  margin: 0 auto;
}
.placeholder-img {
  width: 67px;
  height: 67px;
  margin: 0 auto;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.company-img {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  margin-right: 4px;
  margin-bottom: 0px;
  overflow: hidden;
}
.placeholderIcon {
  width: 37px;
  height: 35px;
}
.logo {
  margin-top: 3px;
}
.logoError {
  color: red;
  font-size: 12px;
  text-align: center;
}
.image-upload {
  display: none;
}
.input-company-no {
  margin-top: -34px;
  width: 94%;
}
@media screen and (min-width: 800px) {
  .account-registration-title {
    font-size: 35px;
  }
}
@media screen and (min-width: 800px) {
  .corporate-registration-body {
    padding: 50px;
  }
}
.logoerror {
  font-size: 10px;
  color: red;
}
</style>
