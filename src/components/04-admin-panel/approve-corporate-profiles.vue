<template>
  <div>
    <v-toolbar flat dark>
      <v-tabs centered class="tabs" active-class="color='red'">
        <v-tab class="tab-content"> DASHBOARD </v-tab>
        <v-tab class="tab-content"> APPROVE CORPORATES </v-tab>
        <v-tab class="tab-content"> APPROVE BULK ENTRY </v-tab>
        <v-tab class="tab-content"> PROCESS </v-tab>
      </v-tabs>
    </v-toolbar>
    <div class="px-16 pt-5">
      <v-col cols="12">
        <v-data-table
          @click:row="showModal"
          :disable-sort="true"
          :headers="headers"
          :items="companies"
          class="card-shadow"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search with Company name, Co. Registration number,"
              class="search-input"
              dense
              outlined
            ></v-text-field>
            <div>
              <h2>APPLY FILTERS</h2>
              <div class="arrival-details">
                <h3>
                  <img
                    src="https://img.icons8.com/ios/19/000000/filter--v1.png"
                  />INDUSTRY
                </h3>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/19/000000/filter--v1.png"
                  />ARRIVAL CITY
                </h3>
              </div>
            </div>
          </template>
          <template v-slot:item.approved="{ item }">
            <i
              class="fa fa-circle-thin"
              :class="{
                approved: item.approved,
                default: item.approved == null,
                disapproved: item.approved == false
              }"
            ></i>
          </template>
        </v-data-table>
      </v-col>
    </div>
    <approve-corporate-dialog
      :currentRow="currentRow"
      :dialog="dialog"
      :corporateName="currentRow.name"
      :address="currentRow.address"
      :telephone="currentRow.telephone"
      :contact="currentRow.contact"
      :industry="currentRow.industry"
      :companyRegistrationNo="currentRow.companyRegistrationNo"
    />
  </div>
</template>
<script>
import ApproveCorporateDialog from "./approve-corporate-dialog.vue"
export default {
  components: { ApproveCorporateDialog },
  name: "approveCorporateProfiles",
  data: () => ({
    search: "",
    dialog: false,
    name: "PPIPBM",
    address: "Menara Matrade Malaysia",
    telephone: +60362032727,
    contactPerson: +60362032930,
    contact: +60362032931,
    companyRegistrationNo: "PPM27061",
    industry: "Nonprofit Organizations",
    companies: [
      {
        approved: null,
        name: "PPIPBM",
        address: "Menara Matrade Malaysia",
        telephone: "+60362032727",
        contact: "John +60362032931",
        companyRegistrationNo: "PPM27061",
        industry: "Nonprofit Organizations"
      },
      {
        approved: null,
        name: "Miss Elwani",
        address: "Suite 3, Sentral Business Suites",
        telephone: " +60193684465",
        contact: "Kyle +60193684685",
        companyRegistrationNo: "H-123456",
        industry: "Health, Wellness"
      },
      {
        approved: null,
        name: "KATTA KAYU",
        address: "Cheras Sentral Mall,Malaysia",
        telephone: "03 - 89589210",
        contact: "Pedro 03 - 89589215",
        companyRegistrationNo: "T-123456",
        industry: "Furniture"
      },
      {
        approved: null,
        name: "Bumi Nilam Sdn Bhd",
        address: "Bandar Puteri, 47100, Puchong, Malaysia",
        telephone: "+60380669988",
        contact: "Warren +603809981",
        companyRegistrationNo: "882402-W",
        industry: "Security Services"
      },
      {
        approved: null,
        name: "Canali",
        address: "Selangor, Malaysia",
        telephone: "+60321449902",
        contact: "Shirley +60321449910",
        companyRegistrationNo: "10101-W",
        industry: "Consumer Goods"
      },
      {
        approved: null,
        name: "ADRIANA",
        address: "Jalan Hamzah,, Kota Bahru, Malaysia",
        telephone: "+60333347787",
        contact: "Vernon +603333685",
        companyRegistrationNo: "888412-W",
        industry: "Apparel & Fashion"
      },
      {
        approved: null,
        name: "Amira's Cosmetics",
        address: "Kuala Lumpur, Malaysia",
        telephone: "+60355583645",
        contact: "Lucas +60355583641",
        companyRegistrationNo: "958420-W",
        industry: "Consumer Goods"
      },
      {
        approved: null,
        name: "Basement Apes Studio",
        address: " Petaling Jaya, Malaysi",
        telephone: "+60358325912",
        contact: "Cole +60358325818",
        companyRegistrationNo: "888402-W",
        industry: "Media Production"
      },
      {
        approved: null,
        name: "Rasa Malaysia",
        address: "Kuala Lumpur, Malaysia",
        telephone: "+60321449902",
        contact: "James +60321449909",
        companyRegistrationNo: "912231-W",
        industry: "Food & Beverages"
      },
      {
        approved: null,
        name: "Farm Fresh Sdn Bhd",
        address: "Petaling Jaya, Malaysia",
        telephone: "+60321441498",
        contact: "Sarah +60321443176",
        companyRegistrationNo: "W-102020",
        industry: "Food & Beverages"
      }
    ],
    headers: [
      { text: "STATUS", align: "center", value: "approved", width: "50" },
      { text: "COMPANY", value: "name", width: "150" },
      { text: "INDUSTRY", value: "industry", width: "150" },
      { text: "APPLIED", value: "companyRegistrationNo", width: "130" },
      { text: "CO.LOCATION ", value: "address", width: "200" },
      { text: "PHONE ", value: "telephone", width: "130" },
      { text: "CONTACT", value: "contact", width: "150" },
      { text: "PROCESSED", value: "industry", width: "150" }
    ],
    currentRow: {}
  }),
  methods: {
    showModal(row) {
      this.currentRow = row
      this.dialog = true
    }
  }
}
</script>
<style scoped>
.tabs {
  height: 65px;
  background: linear-gradient(90deg, #6a0000, #010156);
}
.tab-content {
  color: white;
  font-size: 20px;
  font-weight: 300;
}
.v-tab {
  color: white;
}
.v-tab--active {
  font-weight: bold;
}
.employee-details-title {
  margin-left: -2px;
}
i {
  font-size: 17px;
  border-radius: 50%;
}
.approved {
  color: #129b00;
  background-color: #129b00;
}
.disapproved {
  color: red;
  background-color: red;
}
.card-shadow {
  box-shadow: none;
}
.search-input {
  font-style: italic;
  border-radius: 11px;
}
.arrival-details {
  display: flex;
  margin-top: 10px;
  margin-bottom: 35px;
  border-bottom: 2px solid #8888;
}
.arrival-details h3 {
  margin-right: 3%;
  margin-bottom: 8px;
  font-weight: 400;
}
</style>
