<template>
  <div class="signup">
    <div class="signup__content">
      <form class="signup__form" @submit.prevent="signup">
        <div class="signup__box">
          <label for="signup-mail">Email adress:</label>
          <input type="text" name="signup-mail" v-model="email">
        </div>
        <div class="signup__box">
          <label for="signup-passowrd">Passowrd:</label>
          <input type="password" name="signup-passowrd" v-model="password">
        </div>
        <div class="signup__box">
          <label for="signup-nick">Nick:</label>
          <input type="text" name="signup-nick" v-model="nick">
        </div>
        <p class="error" v-if="feedback">{{ feedback }}</p>
        <button class="signup__btn">Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      nick: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.nick && this.email && this.password) {
        this.slug = slugify(this.nick, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This nick is taken.";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  nick: this.nick,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({
                  name: "Homepage"
                });
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "You must fill all fields";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 70px);
  align-items: center;
  padding: 20px 10px;

  &,
  &__content,
  &__box,
  &__form {
    display: flex;
    justify-content: center;
  }

  &__content {
    width: 100%;
    max-width: 350px;
    padding: 30px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &__form {
    flex-direction: column;
    width: 90%;
    max-width: 250px;
  }

  &__box {
    flex-direction: column;
    margin-bottom: 20px;

    & > label {
      margin-bottom: 4px;
      font-size: 15px;
      line-height: 1.7;
      color: #7d7c7c;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & > input[type="text"],
    & > input[type="password"] {
      border: 1px solid #e4e4e4;
      background-color: #fff;
      outline: none;
      padding: 8px 12px;
      font-size: 16px;
      color: #303030;
    }
  }

  &__btn {
    background-color: #428bca;
    color: #fff;
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #186eb9;
    }
  }
}

.error {
  color: red;
  margin-bottom: 20px;
}
</style>

