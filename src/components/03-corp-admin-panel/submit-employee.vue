<template>
  <v-row class="d-flex">
    <v-col cols="2" sm="2" md="2" lg="2" class="tab-options">
      <router-link to="submit-employee" class="active option-tab">
        Submit Employee</router-link
      ><br />
      <router-link to="view-applications" class="option-tab">
        View application
      </router-link>
    </v-col>
    <v-col cols="10" sm="10" md="10" lg="10" class="pr-16 pl-16">
      <v-container>
        <h2 class="titleOfEmployeedetails pt-8">
          <b>EMPLOYEE DETAILS</b>
        </h2>
        <v-form @submit.prevent="submit" ref="form" v-model="formValid">
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field
                ref="first_name"
                v-model="first_name"
                :rules="first_nameRules"
                label="first name *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                ref="last_name"
                v-model="last_name"
                :rules="last_nameRules"
                label="last name *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <vue-tel-input-vuetify
                v-model="phoneNational"
                :defaultCountry="phoneCountryCode"
                @input="validatePhone"
                :rules="phone_in_home_countryRules"
                label="mobile no. *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="email"
                @click:append="show2 = !show2"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-autocomplete
                label="gender"
                v-model="gender"
                :items="genderItems"
                :rules="genderRules"
                item-text="name"
                item-value="id"
                placeholder="Select..."
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    label="date of birth *"
                    type="text"
                    v-model="birthday"
                    :rules="birthdayRules"
                    v-on="on"
                    readonly
                  />
                </template>
                <v-date-picker v-model="birthday"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" sm="6">
              <v-autocomplete
                v-model="nationality_country"
                :rules="nationality_countryRules"
                label="nationality *"
                placeholder="Select..."
                :items="allCountriesList"
                item-text="text"
                item-value="value"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="ic_number"
                :rules="ic_numberRules"
                label="IC no. *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="passport_number"
                :rules="passport_numberRules"
                label="passport no. *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="passport_expiry_date"
                    :rules="passport_expiry_dateRules"
                    label="passport expiry. *"
                    v-on="on"
                    readonly
                  />
                </template>
                <v-date-picker v-model="passport_expiry_date"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="homeAddress"
                :rules="homeAddressRules"
                label="home address *"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field label="home address 2" v-model="homeAddress2" />
            </v-col>
            <v-col cols="6" sm="6">
              <v-autocomplete
                v-model="country"
                :rules="countryRules"
                :items="allCountriesList"
                item-text="text"
                item-value="value"
                label="country *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="state"
                :rules="stateRules"
                label="state *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="city"
                :rules="cityRules"
                label="city *"
                placeholder="El Paso"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="postcode"
                :rules="postcodeRules"
                label="postcode *"
                placeholder="79938"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <h2 class="titleOfEmployeedetails pt-8">
                <b>VISIT DETAILS</b>
              </h2>
            </v-col>
            <v-col cols="6" sm="6">
              <v-checkbox
                @click="
                  enterOnlyMode = false
                  type = 1
                "
                :rules="checkBoxRules"
                color="black"
                class="align-start"
                v-model="enterAndExitMode"
              >
                <template v-slot:label>
                  <div>
                    <p class="my-1 black--text">Enter and exit Sarawak</p>
                    <p class="font-italic">
                      for short term stay (up to 14 days), transit passengers,
                      flight crew, freight and shipping personnel and essential
                      services staff.
                    </p>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
            <v-col cols="6" sm="6">
              <v-checkbox
                @click="
                  enterAndExitMode = false
                  type = 2
                "
                v-model="enterOnlyMode"
                :rules="checkBoxRules"
                color="black"
                class="align-start"
                id="f-application-type-2"
              >
                <template v-slot:label>
                  <div>
                    <p class="my-1 black--text">Enter Sarawak only</p>
                    <p class="font-italic">
                      for entry and stay in Sarawak over 14 days and travels
                      within Sarawak.
                    </p>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
            <v-col cols="6" sm="6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :rules="intended_entry_dateRules"
                    label="date of entry *"
                    type="text"
                    v-model="intended_entry_date"
                    v-on="on"
                    readonly
                  />
                </template>
                <v-date-picker v-model="intended_entry_date"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" sm="6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-show="enterAndExitMode"
                    :rules="intended_departure_dateRules"
                    label="date of exit *"
                    type="text"
                    v-model="intended_departure_date"
                    v-on="on"
                    readonly
                  />
                </template>
                <v-date-picker
                  v-model="intended_departure_date"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="12">
              <!-- <v-text-field
                  v-model="purpose_of_visit"
                  :rules="purpose_of_visitRules"
                  label="purpose of visit *"
                /> -->
              <v-combobox
                hide-selected
                v-model="purpose_of_visit"
                :items="purpose_of_visitItems"
                clearable
                label="purpose of visit *"
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
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="description_of_visit"
                :rules="description_of_visitRules"
                label="description of visit *"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <vue-tel-input-vuetify
                v-model="phone_in_sarawakNational"
                :defaultCountry="phone_in_sarawakCountryCode"
                @input="validatephone_in_sarawak"
                :rules="phone_in_sarawakRules"
                label="phone no. in Sarawak *"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="address"
                :rules="addressRules"
                label="address in Sarawak *"
              />
              <v-text-field
                v-model="address_2"
                :rules="address_2Rules"
                label="address in Sarawak 2 *"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="visitDetailsCity"
                :rules="visitDetailsCityRules"
                label="city *"
                placeholder="El Paso"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="visitDetailsPostCode"
                :rules="visitDetailsPostCodeRules"
                label="postcode *"
                placeholder="79938"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="emergency_contact_name"
                :rules="emergency_contact_nameRules"
                label="emergency contact person *"
                placeholder="El Paso"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <vue-tel-input-vuetify
                v-model="emergencyContactPhoneNational"
                :rules="emergencyContactPhoneRules"
                label="emergency contact phone *"
                :defaultCountry="emergencyContactPhoneCountryCode"
                @input="validateEmergencyContactPhone"
              />
            </v-col>

            <!-- TRAVEL MODE -->
            <v-col cols="12">
              <h2><b>TRAVEL MODE & DETAILS</b></h2>
              <div class="d-flex">
                <v-checkbox
                  v-model="travelTypeAir"
                  @click="
                    travelTypeLand = false
                    travelTypeSea = false
                    entry_mode = 1
                  "
                  class="pr-7"
                  label="Air"
                  color="black"
                ></v-checkbox>
                <v-checkbox
                  v-model="travelTypeLand"
                  @click="
                    travelTypeAir = false
                    travelTypeSea = false
                    entry_mode = 2
                  "
                  class="pr-7"
                  label="Land"
                  color="black"
                ></v-checkbox>
                <v-checkbox
                  v-model="travelTypeSea"
                  @click="
                    travelTypeLand = false
                    travelTypeAir = false
                    entry_mode = 3
                  "
                  class="pr-7"
                  label="Sea"
                  color="black"
                ></v-checkbox>
              </div>
            </v-col>
            <!-- AIR MODE -->
            <template v-if="travelTypeAir">
              <span
                class="customCols"
                v-for="(item, index) in airEntryFlights"
                :key="`flight-` + index"
              >
                <v-col cols="10">
                  <v-text-field
                    v-model="airEntryFlights[index]"
                    :rules="airEntryFlightsRules"
                    :label="`Flight number ${index + 1} *`"
                  />
                </v-col>
                <span class="d-flex">
                  <v-col cols="5" sm="5">
                    <v-text-field
                      v-model="airEntryFlightFrom[index]"
                      :label="`flight departure port ${index + 1} *`"
                      :rules="airEntryFlightFromRules"
                    />
                  </v-col>
                  <v-col cols="5" sm="5">
                    <v-text-field
                      v-model="airEntryFlightTo[index]"
                      :label="`flight arrival port ${index + 1} *`"
                      :rules="airEntryFlightToRules"
                    />
                  </v-col>
                  <v-col cols="1" v-if="airEntryFlights.length > 1">
                    <v-icon
                      class="mt-4"
                      color="red darken-2"
                      @click="removeFlight(index)"
                      >fa-trash-alt</v-icon
                    >
                  </v-col>
                </span>
              </span>
              <v-col cols="8">
                <v-btn @click="addFlight()" rounded large class="mr-2">
                  <span class="headline mr-2">+</span>Add Flight</v-btn
                >
              </v-col>
            </template>
            <!-- LAND MODE  -->
            <v-col cols="10" v-if="travelTypeLand">
              <v-text-field
                v-model="vehiclePlateNumber"
                label="vehicle plate number *"
                :rules="vehiclePlateNumberRules"
              />
            </v-col>
            <!-- SEA MODE -->
            <span class="customCols " v-if="travelTypeSea">
              <v-col cols="10">
                <v-text-field
                  v-model="shipName"
                  label="ship/boat name *"
                  :rules="shipNameRules"
                />
              </v-col>
              <v-col cols="10">
                <v-autocomplete
                  v-model="seaModeOfEntry"
                  label="sea mode of entry *"
                  :items="seaModesList"
                  :rules="seaModeOfEntryRules"
                />
              </v-col>
            </span>
            <v-col cols="10">
              <v-autocomplete
                v-model="travelFromCountry"
                :items="allCountriesList"
                label="from (country) *"
                :rules="travelFromCountryRules"
              />
            </v-col>
            <v-col cols="5" sm="5">
              <v-text-field
                v-model="departure_port_city"
                label="from (city) *"
                :rules="departure_port_cityRules"
              />
            </v-col>
            <v-col cols="5" sm="5">
              <v-text-field
                v-model="arrival_port_city"
                label="to (city) *"
                :rules="arrival_port_cityRules"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <div class="next-btn">
        <v-btn color="#000065" type="submit" @click="submit" block dark
          >SUBMIT</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { Actions } from "../../constants"
import axios from "axios"
export default {
  components: {},
  name: "submitEmployee",
  data() {
    return {
      SENDING_APPLICATION_URL: process.env.VUE_APP_API_BASE_URLS,
      hardCodeToken:
        "fOyv8UWQgHAmH8zcEXKiSwIgfIIUgrootDt5S4xCx1Ie1i5B7rvyfjD43LGhcWlA6GKpCwRd4qPqOYOr",
      formValid: false,
      first_name: "",
      first_nameRules: [v => !!v || "first name is required"],
      last_name: "",
      last_nameRules: [v => !!v || "last name is required"],
      telInputRules: [
        v => !!v || "mobile phone number is required",
        () => this.phoneValid || "mobile phone number is not valid"
      ],
      gender: "",
      genderRules: [v => !!v || "gender  is required"],
      birthday: "",
      birthdayRules: [v => !!v || "date of birth is required"],
      nationality_country: null,
      nationality_countryRules: [v => !!v || "nationality is required"],
      ic_number: null,
      ic_numberRules: [v => !!v || "IC no is required"],
      passport_number: null,
      passport_numberRules: [v => !!v || "passport no is required"],
      passport_expiry_date: null,
      passport_expiry_dateRules: [v => !!v || " passport expiry is required"],
      homeAddress: "",
      homeAddressRules: [v => !!v || "home address is required"],
      homeAddress2: "",
      email: "",
      emailRules: [v => !v || /.+@.+\..+/.test(v) || "email must be valid"],
      country: "",
      countryRules: [v => !!v || "country is required"],
      state: "",
      stateRules: [v => !!v || "state is required"],
      city: "",
      cityRules: [v => !!v || "city is required"],
      phone_in_sarawakCountryCode: "",
      phone_in_sarawakNational: "",
      phone_in_sarawakRules: [
        v => !!v || "phone no. in Sarawak is required",
        () => this.phone_in_sarawakValid || "phone no. in Sarawak is not valid"
      ],
      entry_mode: 1,
      postcode: "",
      postcodeRules: [v => !!v || "postcode is required"],

      checkBoxRules: [
        () =>
          this.enterAndExitMode ||
          this.enterOnlyMode ||
          "Please choose at least one of check boxes"
      ],
      type: 1,
      enterAndExitMode: true,
      enterOnlyMode: false,
      intended_entry_date: "",
      intended_entry_dateRules: [v => !!v || "date of entry is required"],
      intended_departure_date: "",
      intended_departure_dateRules: [v => !!v || "date of exit is required"],
      purpose_of_visit: [],
      purpose_of_visitItems: [
        "Business Events",
        "Employment",
        "Visiting Friends & Relatives",
        "Leisure/Holiday",
        "Education",
        "Medical",
        "Home",
        "Others"
      ],
      purpose_of_visitRules: [v => !!v || "purpose of visit is required"],
      description_of_visit: "",
      description_of_visitRules: [
        v => !!v || "description of visit is required"
      ],
      phoneNational: "",
      phoneCountryCode: "",
      phone_in_home_countryRules: [
        v => !!v || "mobile phone number is required",
        () => this.phoneValid || "mobile phone number is not valid"
      ],
      address: "",
      addressRules: [v => !!v || "address in Sarawak is required"],
      address_2: "",
      address_2Rules: [v => !!v || "address in Sarawak 2 is required"],
      visitDetailsCity: "",
      visitDetailsCityRules: [v => !!v || "city is required"],
      visitDetailsPostCode: "",
      visitDetailsPostCodeRules: [v => !!v || "postcode is required"],
      emergency_contact_name: "",
      emergency_contact_nameRules: [
        v => !!v || "emergency contact person is required"
      ],
      emergencyContactPhoneCountryCode: "",
      emergencyContactPhoneNational: "",
      emergencyContactPhoneRules: [
        v => !!v || "emergency contact phone is required",
        () =>
          this.emergencyContactPhoneValid ||
          "emergency contact phone is not valid"
      ],
      travelTypeAir: true,
      travelTypeLand: false,
      travelTypeSea: false,
      airEntryFlights: [""],
      airEntryFlightsRules: [v => !!v || "flight number is required"],
      airEntryFlightFrom: [""],
      airEntryFlightFromRules: [v => !!v || "departure port is required"],
      airEntryFlightTo: [""],
      airEntryFlightToRules: [v => !!v || "arrival port is required"],
      vehiclePlateNumber: "",
      vehiclePlateNumberRules: [v => !!v || "vehicle plate number is required"],
      shipName: "",
      shipNameRules: [v => !!v || "ship/boat name is required"],
      seaModeOfEntry: "",
      seaModeOfEntryRules: [v => !!v || "sea mode of entry is required"],
      travelFromCountry: "",
      travelFromCountryRules: [v => !!v || "country is required"],
      departure_port_city: "",
      departure_port_cityRules: [v => !!v || "city is required"],
      arrival_port_city: "",
      arrival_port_cityRules: [v => !!v || "city is required"],

      genderItems: [
        {
          id: 1,
          name: "male"
        },
        {
          id: 2,
          name: "female"
        }
      ],
      seaModesList: [
        {
          text: "Cargo",
          value: "CARGO"
        },
        {
          text: "Offshore",
          value: "OFFSHORE"
        },
        {
          text: "Other",
          value: "OTHER"
        }
      ]
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
    }
  },
  mounted() {
    this.$store.dispatch(Actions.FETCH_COUNTRIES)
  },
  methods: {
    remove(item) {
      this.purpose_of_visitItems.splice(
        this.purpose_of_visitItems.indexOf(item)
      )
      this.purpose_of_visitItems = [...this.purpose_of_visitItems]
    },
    addFlight() {
      this.airEntryFlights.push(""), this.airEntryFlightFrom.push("")
      this.airEntryFlightTo.push("")
    },
    removeFlight(index) {
      this.airEntryFlights.splice(index, 1)
      this.airEntryFlightFrom.splice(index, 1)
      this.airEntryFlightTo.splice(index, 1)
    },
    validatePhone(formattedNumber, phoneObject) {
      if (phoneObject.isValid) {
        this.phone_in_home_country = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.phoneValid = phoneObject.isValid
      } else {
        this.phone_in_home_country = { isValid: false }
        this.phoneValid = phoneObject.isValid
      }
    },
    validatephone_in_sarawak(formattedNumber, phoneObject) {
      if (phoneObject.isValid) {
        this.phone_in_sarawak = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.phone_in_sarawakValid = phoneObject.isValid
      } else {
        this.phone_in_sarawak = { isValid: false }
        this.phone_in_sarawakValid = phoneObject.isValid
      }
    },
    validateEmergencyContactPhone(formattedNumber, phoneObject) {
      if (phoneObject.isValid) {
        this.emergencyContactPhone = {
          countryCode: phoneObject.country.iso2,
          international: phoneObject.number.e164,
          national: phoneObject.number.national,
          isValid: phoneObject.isValid
        }
        this.emergencyContactPhoneValid = phoneObject.isValid
      } else {
        this.emergencyContactPhone = { isValid: false }
        this.emergencyContactPhoneValid = phoneObject.isValid
      }
    },
    prepareCorporateData(form) {
      const formData = new FormData()
      formData.append("type", form.type)
      formData.append("first_name", form.first_name)
      formData.append("last_name", form.last_name)
      formData.append("gender", form.gender)
      formData.append("birthday", form.birthday)
      formData.append("nationality_country_id", form.nationality_country)
      formData.append("email", form.email)
      formData.append("ic_number", form.ic_number)
      formData.append("passport_number", form.passport_number)
      formData.append("passport_expiry_date", form.passport_expiry_date)
      formData.append("description_of_visit", form.description_of_visit)
      formData.append("intended_entry_date", form.intended_entry_date)
      if (form.enterAndExitMode == true) {
        formData.append("intended_departure_date", form.intended_departure_date)
      }
      formData.append(
        "phone_in_home_country",
        form.phone_in_home_country.international
      )
      formData.append("entry_mode", form.entry_mode)
      formData.append("phone_in_sarawak", form.phone_in_sarawak.international)
      formData.append("address", form.address)
      formData.append("address_2", form.address_2)
      formData.append("city", form.visitDetailsCity)
      formData.append("emergency_contact_name", form.emergency_contact_name)
      formData.append(
        "emergency_contact_phone",
        form.emergencyContactPhone.international
      )
      for (let i = 0; i < form.purpose_of_visit.length; i++) {
        formData.append(`purpose_of_visit[${i}]`, form.purpose_of_visit[i])
      }
      formData.append("permanent_address[address]", form.homeAddress)
      formData.append("permanent_address[address_2]", form.homeAddress2)
      formData.append("permanent_address[city]", form.city)
      formData.append("permanent_address[state]", form.state)
      formData.append("permanent_address[country_id]", form.country)
      formData.append("departure_port_country_id", form.travelFromCountry)
      formData.append("departure_port_city", form.departure_port_city)
      formData.append("arrival_port_city", form.arrival_port_city)
      if (form.travelTypeAir) {
        for (let i = 0; i < form.airEntryFlightFrom.length; i++) {
          formData.append(`flights[${i}][number]`, form.airEntryFlights[i])
          formData.append(`flights[${i}][from]`, form.airEntryFlightFrom[i])
          formData.append(`flights[${i}][to]`, form.airEntryFlightTo[i])
        }
      }
      if (form.travelTypeLand) {
        formData.append("vessel_details", form.vehiclePlateNumber)
      }
      if (form.travelTypeSea) {
        formData.append("sea_mode", form.seaModeOfEntry)
        formData.append("vessel_details", form.shipName)
      }
      return formData
    },
    async submitEmployee() {
      const formData = this.prepareCorporateData(this)
      try {
        const postResponse = await axios.post(
          `${this.SENDING_APPLICATION_URL}/applications`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.$store.state.appToken.token}`
            }
          }
        )

        if (postResponse.status !== 200) {
          return false
        }
        console.log("Done")
      } catch (e) {
        if (e?.postResponse?.status === 422) {
          let msg = e.postResponse.data.message
          msg += "\r\n\r\n"

          for (let i = 0; i < e.postResponse.data.errors.length; i++) {
            const err = e.postResponse.data.errors[i]
            msg += `${i + 1}: ${err.message}\r\n`
          }
          return msg
        }
        return false
      }
    },
    submit() {
      this.$refs.form.validate()
      if (this.formValid) {
        this.submitEmployee()
      }
    }
  }
}
</script>
<style scoped>
.titleOfEmployeedetails {
  margin-left: -2px;
}
.next-btn {
  width: 300px;
  margin: 90px auto 0;
}
.customCols {
  width: 100%;
}
.tab-options {
  padding-top: 40px;
  border-right: 1px solid #888888;
}
.option-tab {
  text-align: right;
  font-size: 17px;
  text-decoration: none;
  display: block;
  text-align: right;
  margin-left: 2%;
  color: #888888;
  padding: 10px;
}
.active {
  border-left: 3px solid black;
  color: black;
}
:hover.option-tab {
  background-color: #eaeaea;
}
</style>
