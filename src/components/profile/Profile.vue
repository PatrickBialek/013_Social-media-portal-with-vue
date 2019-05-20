<template>
  <div class="user">
    <div v-if="profile" class="user__content">
      <h2 class="user__name">{{ title }}'s wall</h2>
      <div class="user__references">
        <form class="user__form" @submit.prevent="addReference">
          <label class="user__label" for="add-reference">Your reference:</label>
          <textarea
            class="user__textarea"
            type="text"
            name="add-reference"
            id="add-reference-textarea"
            v-model="newReference"
          ></textarea>
          <button class="user__btn">Add reference</button>
          <p class="user__error" v-if="feedback">{{ feedback }}</p>
        </form>
        <div class="user__references-box">
          <h3>User references:</h3>
          <ul>
            <li v-for="(comment, index) in comments" :key="index">
              <div>{{ comment.from}}</div>
              <div>{{ comment.content }}</div>
            </li>
          </ul>
        </div>
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

    db.collection("comments")
      .where("to", "==", this.$route.params.id)
      .onSnapshot(snapshot => {
        snapshot.docChanges.forEach(change => {
          if ((change.type = "added")) {
            this.comments.unshift({
              from: change.doc.data().from,
              content: change.doc.data().content
            });
          }
        });
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
.user {
  padding: 50px 20px;

  &,
  &__content,
  &__references,
  &__form {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
  }

  &__content {
    max-width: 1200px;
  }

  &__content,
  &__references {
    flex-direction: column;
    align-items: center;
  }

  &__name {
    font-size: 20px;
    color: #303030;
    font-weight: 700;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
  }

  &__references {
  }

  &__form {
    justify-content: center;
    flex-direction: column;
    text-align: left;
    box-sizing: border-box;
    align-items: flex-start;
  }

  &__label {
    margin-bottom: 4px;
    font-size: 15px;
    line-height: 1.7;
    color: #7d7c7c;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  &__textarea {
    resize: none;
    width: 100%;
    height: 100px;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    outline: none;
    padding: 8px 12px;
    font-size: 16px;
    color: #303030;
  }

  &__btn {
    display: block;
    background-color: #428bca;
    color: #fff;
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    margin-top: 10px;
    -webkit-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #186eb9;
    }
  }

  &__error {
  }

  &__references-box {
  }
}
</style>


