<template>
  <div class="user">
    <div v-if="profile" class="user__content">
      <h2 class="user__name">{{ title }}</h2>
      <div class="user__references">
        <h3>User references:</h3>
        <form class="user__form" @submit.prevent="addReference">
          <label class="user__label" for="add-reference"></label>
          <textarea
            class="user__text-field"
            type="text"
            name="add-reference"
            id="add-reference-textarea"
            v-model="newReference"
          ></textarea>
          <button class="user__btn">Add reference</button>
          <p class="user__error" v-if="feedback">{{ feedback }}</p>
        </form>
        <div class="user__references-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Profile",
  data() {
    return {
      profile: null,
      title: null,
      newReference: null,
      feedback: null,
      user: null
    };
  },
  created() {
    // reference to users storage
    let ref = db.collection("users");

    // get current user
    ref
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          (this.user = doc.data()), (this.user.id = doc.id);
        });
      });

    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data();
      })
      .then(() => {
        this.title =
          this.profile.nick.charAt(0).toUpperCase() +
          this.profile.nick.slice(1);
      });
  },
  methods: {
    addReference() {
      if (this.newReference) {
        const textarea = document.querySelector("#add-reference-textarea");

        this.feedback = null;
        db.collection("comments")
          .add({
            to: this.$route.params.id,
            from: this.user.id,
            content: this.newReference,
            time: Date.now()
          })
          .then(() => {
            this.newReference;
          })
          .then(() => {
            textarea.value = null;
          })
          .error(err => {
            this.feedback = err;
          });
      } else {
        this.feedback = "You have to fill reference field!";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


