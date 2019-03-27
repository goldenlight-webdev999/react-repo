<template>
  <b-row>
    <b-col cols="12">
      <h2>Shift List / Next Weeks Schedule</h2>
      <b-btn href="#/addshift2">Add New Shift</b-btn>
      <b-table striped hover :items="items" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <b-btn href="#/shiftlist">This Weeks Schedule</b-btn>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "ShiftList2",
  data() {
    return {
      fields: {
        time: { label: "Shift", class: "text-center" },
        shiftType: {
          label: "Shift Type",
          sortable: true,
          class: "text-center"
        },
        monday: { label: "Monday", class: "text-center" },
        tuesday: { label: "Tuesday", class: "text-center" },
        wednesday: { label: "Wednesday", class: "text-center" },
        thursday: { label: "Thursday", class: "text-center" },
        friday: { label: "Friday", class: "text-center" },
        saturday: { label: "Saturday", class: "text-center" },
        sunday: { label: "Sunday", class: "text-center" },
        actions: { label: "Action", class: "text-center" }
      },
      items: [],
      errors: [],
      ref: firebase.firestore().collection("schedule2")
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.items = [];
      querySnapshot.forEach(doc => {
        this.items.push({
          key: doc.id,
          time: doc.data().time,
          shiftType: doc.data().shiftType,
          monday: doc.data().monday,
          tuesday: doc.data().tuesday,
          wednesday: doc.data().wednesday,
          thursday: doc.data().thursday,
          friday: doc.data().friday,
          saturday: doc.data().saturday,
          sunday: doc.data().sunday
        });
      });
    });
  },
  methods: {
    details(schedule) {
      router.push({ name: "ShowShifts2", params: { id: schedule.key } });
    }
  }
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>
