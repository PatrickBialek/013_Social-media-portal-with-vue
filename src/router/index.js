import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/home/Homepage";
import Signup from "@/components/auth/Signup";
import Login from "@/components/auth/Login";
import Goodbay from "@/components/auth/Goodbay";
import Wall from "@/components/home/Wall";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/goodbay",
      name: "Goodbay",
      component: Goodbay
    },
    {
      path: "/wall",
      name: "Wall",
      component: Wall
    }
  ]
});
