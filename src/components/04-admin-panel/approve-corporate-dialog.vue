<template>
  <div>
    <v-dialog v-model="dialog" width="511">
      <v-card>
        <div class="py-6 closeButton">
          <p class="topPending">PENDING</p>
          <v-btn icon @click="dialog = false"> X </v-btn>
        </div>
        <v-card-text>
          <div class="company-name mb-2">
            <img
              class="company-icon"
              src="../../assets/sime darby.png"
              alt=""
            />
            <div>
              <span class="card-infos">corporate Name</span><br />
              <span class="card-details"
                >{{ corporateName }} {{ companyRegistrationNo }} </span
              ><br />
              <span class="card-infos">{{ industry }}}</span>
            </div>
          </div>
          <div class="dialog">
            <div class="industry-section details-section mb-2">
              <span class="card-infos">business services</span><br />
              <div class="industry-info">
                <span class="card-details px-2">{{ industry }}</span>
                <span class="card-details px-2">{{ industry }}</span>
              </div>
            </div>
            <div class="contact-details mb-2">
              <div class="contact-section details-section">
                <span class="card-infos">telephone no</span><br />
                <span class="card-details">{{ telephone }}</span>
              </div>
              <div class="contact-section details-section">
                <span class="card-infos">fax.no</span><br />
                <span class="card-details">{{ telephone }}</span>
              </div>
            </div>

            <div class="comp-registration details-section mb-2">
              <span class="card-infos">registered address</span><br />
              <span class="card-details">{{ address }}</span>
            </div>

            <div class="contact-person-section details-section mb-2">
              <span class="card-infos">Contact person</span><br />
              <span class="card-details">{{ contact }}</span>
            </div>

            <div class="form-info mb-2">
              <i class="fa fa-file-text-o formIcon mr-1" aria-hidden="true"></i>
              <div>
                <span class="card-details"
                  >Form9 Company <br />
                  Incorporation</span
                >
              </div>
            </div>

            <div class="form-info mb-2">
              <i
                class="fa fa-file-text-o formIcon mr-1 mb-16"
                aria-hidden="true"
              ></i>
              <div>
                <span class="card-details">Form 13 <br />Change of Name</span>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-btn
          @click="disapprove(currentRow)"
          class="reject-button pa-5"
          color="white"
          tile
          text
        >
          REJECT
        </v-btn>
        <v-btn
          @click="approve(currentRow)"
          class="approve-button pa-5"
          text
          tile
          color="white"
          >Approve</v-btn
        >
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "approve-corporate-dialog",
  props: {
    currentRow: Object,
    corporateName: String,
    companyRegistrationNo: String,
    industry: String,
    telephone: String,
    address: String,
    contact: String,
    dialog: Boolean
  },
  methods: {
    approve(currentRow) {
      currentRow.approved = true
    },
    disapprove(currentRow) {
      currentRow.approved = false
    }
  }
}
</script>
<style scoped>
.dialog {
  width: 65%;
  margin: 0 auto;
}
.closeButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
}
.topPending {
  letter-spacing: 2px;
  width: 17%;
  padding-left: 3%;
  font-size: 10px;
  color: white;
  background-color: #888;
}
.closeButton :nth-child(2) {
  margin-top: -3%;
  font-size: 18px;
}
.company-icon {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  margin-right: 21px;
}
.company-name {
  display: flex;
  margin-bottom: 10px;
  margin-left: 11px;
}
span {
  line-height: 12px;
}
.industry-info {
  display: flex;
}
.industry-info span {
  font-size: 10px;
  margin-right: 5px;
  border: 1px solid #888;
  border-radius: 2px;
  background-color: #eee;
}
.formIcon {
  font-size: 25px;
  margin-top: 8px;
}
.form-info {
  display: flex;
}
.card-infos {
  color: grey;
  line-height: 10px;
  font-size: 10px;
}
.card-details {
  color: black;
  font-size: 12px;
}
.contact-details {
  display: flex;
}
.details-section {
  width: 50%;
}
.approve-button {
  width: 50%;
  background-color: #000063;
  border-radius: 0;
}
.reject-button {
  width: 50%;
  border-radius: 0;
  background-color: #d0021b;
}
</style>
