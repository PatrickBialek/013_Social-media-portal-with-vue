import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/home/Homepage";
import Signup from "@/components/auth/Signup";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ]
});
