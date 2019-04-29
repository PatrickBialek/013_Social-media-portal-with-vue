<template>
  <div class="user">
    <div v-if="profile" class="user__content">{{ title }}'s wall</div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Profile",
  data() {
    return {
      profile: null,
      title: null
    };
  },
  created() {
    let ref = db.collection("users");
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
  }
};
</script>

<style lang="scss" scoped>
</style>


