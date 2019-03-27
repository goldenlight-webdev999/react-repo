<template>
  <b-row>
    <b-col cols="12">
      <h2>Add Shift</h2>

      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Time"
          >
            <b-form-input id="time" v-model.trim="schedule.time"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Shift Type"
          >
            <b-form-textarea id="shiftType" v-model="schedule.shiftType"></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Monday"
          >
            <b-form-input id="monday" v-model.trim="schedule.monday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Tuesday"
          >
            <b-form-input id="tuesday" v-model.trim="schedule.tuesday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Wednedsay"
          >
            <b-form-input id="wednesday" v-model.trim="schedule.wednesday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Thursday"
          >
            <b-form-input id="thursday" v-model.trim="schedule.thursday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Friday"
          >
            <b-form-input id="friday" v-model.trim="schedule.friday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Saturday"
          >
            <b-form-input id="saturday" v-model.trim="schedule.saturday"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Sunday"
          >
            <b-form-input id="sunday" v-model.trim="schedule.sunday"></b-form-input>
          </b-form-group>
          <b-btn href="#/shiftlist">Cancel</b-btn>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "@/Firebase";
import router from "@/router";

export default {
  name: "AddShift",
  data() {
    return {
      ref: firebase.firestore().collection("schedule"),
      schedule: {}
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.ref
        .add(this.schedule)
        .then(docRef => {
          this.schedule.time = "";
          this.schedule.shiftType = "";
          this.schedule.monday = "";
          this.schedule.tuesday = "";
          this.schedule.wednesday = "";
          this.schedule.thursday = "";
          this.schedule.friday = "";
          this.schedule.saturday = "";
          this.schedule.sunday = "";
          router.push({
            name: "ShiftList"
          });
        })
        .catch(error => {
          alert("Error adding document: ", error);
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
