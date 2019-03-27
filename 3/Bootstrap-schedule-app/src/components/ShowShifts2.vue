<template>
  <b-row>
    <b-col cols="12">
      <h2>Edit Schedule</h2>
      <b-btn href="#/shiftlist2">Shift List</b-btn>
      <b-jumbotron>
        <!-- <template slot="header">{{board.title}}</template> -->
        <template slot="lead">
          Time: {{schedule.time}}
          <br>
          Shift Type: {{schedule.shiftType}}
          <br>
          Monday: {{schedule.monday}}
          <br>
          Tuesday: {{schedule.tuesday}}
          <br>
          Wednesday: {{schedule.wednesday}}
          <br>
          Thursday: {{schedule.thursday}}
          <br>
          Friday: {{schedule.friday}}
          <br>
          Saturday: {{schedule.saturday}}
          <br>
          Sunday: {{schedule.sunday}}
          <br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editschedule(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteschedule(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "ShowShifts2",
  data() {
    return {
      key: "",
      schedule: {}
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("schedule2")
      .doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.key = doc.id;
        this.schedule = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editschedule(id) {
      router.push({
        name: "EditShifts2",
        params: { id: id }
      });
    },
    deleteschedule(id) {
      firebase
        .firestore()
        .collection("schedule2")
        .doc(id)
        .delete()
        .then(() => {
          router.push({
            name: "ShiftList2"
          });
        })
        .catch(error => {
          alert("Error removing document: ", error);
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
.edit-btn {
  margin-right: 20px;
  width: 70px;
}
</style>
