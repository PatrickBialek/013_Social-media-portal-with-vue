<template>
  <div class="signup">
    <div v-if="profile" class="signup__content">{{ profile.nick }}'s wall</div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Profile",
  data() {
    return {
      profile: null
    };
  },
  created() {
    let ref = db.collection("users");
    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data();
      });
  }
};
</script>

<style lang="scss" scoped>
</style>


