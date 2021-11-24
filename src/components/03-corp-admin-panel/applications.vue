<template class="ma-0 pa-0">
  <v-row class="d-flex">
    <v-col cols="2" sm="2" md="2" lg="2" class="tab-options">
      <router-link to="submit-employee" class="option-tab">
        Submit Employee</router-link
      ><br />
      <router-link to="view-applications" class="active option-tab">
        View application
      </router-link>
    </v-col>
    <v-col cols="10" sm="10" md="10" lg="10">
      <v-container>
        <v-data-table
          hide-default-footer
          :disable-sort="true"
          :headers="headers"
          :items="companies"
          item-key="name"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search with employee name,flight number,ship name,vehicle plate number."
              class="font-italic searchInput"
              dense
              outlined
            />
            <div>
              <h2>APPLY FILTERS</h2>
              <div class="arrival-details">
                <h3>
                  <img
                    src="https://img.icons8.com/ios/19/000000/filter--v1.png"
                  />ARRIVAL CITY
                </h3>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/19/000000/filter--v1.png"
                  />ARRIVAL DATE
                </h3>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/19/000000/filter--v1.png"
                  />MODE of TRAVEL
                </h3>
              </div>
            </div>
          </template>
          <template v-slot:item.id="{ item }">
            <div class="statusRowNo">
              <i
                class="fa fa-circle-thin status-icon"
                aria-hidden="true"
                :class="{
                  approved: item.id == 'E791248',
                  disapproved: item.id == 'E7912489'
                }"
              ></i>
              <span>{{ item.id }}</span>
            </div>
          </template>
        </v-data-table>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      search: "",
      headers: [
        { text: "Status & NO", value: "id", width: "100" },
        { text: "Employee", value: "employee", width: "90" },
        { text: "Applied", value: "applied", width: "90" },
        { text: "Arrival city", value: "arrivalCity", width: "90" },
        { text: "VISIT DESCRIPTION", value: "visitDescription", width: "250" },
        { text: "GENDER", value: "gender", width: "50" },
        { text: "Date of birth", value: "DateOfBirth", width: "95" }
      ],
      companies: [
        {
          id: "E7912481",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912482",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912489",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912487",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E791248",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912481",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912482",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E7912486",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "male"
        },
        {
          id: "E791248",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "female"
        },
        {
          id: "E7912484",
          DateOfBirth: "22 jan 99",
          employee: "Eugene tai",
          applied: "07 Mar 21",
          arrivalCity: "Bintulu",
          visitDescription:
            "Already graduate from IBS college in Miri. Want to go back my home town (Sabah).",
          gender: "female"
        }
      ]
    }
  }
}
</script>
<style scoped>
.status-icon {
  font-size: 20px;
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
.statusRowNo {
  display: flex;
}
.status-icon {
  margin-right: 10px;
}
.searchInput {
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

.tab-options {
  padding-top: 40px;
  border-right: 1px solid #888888;
}
.option-tab {
  text-align: right;
  color: #888888;
  font-size: 17px;
  text-decoration: none;
  display: block;
  text-align: right;
  margin-left: 2%;
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
