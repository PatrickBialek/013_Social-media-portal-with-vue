import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

// Vue components
import Homepage from "@/components/home/Homepage";
import Signup from "@/components/auth/Signup";
import Login from "@/components/auth/Login";
import Goodbay from "@/components/auth/Goodbay";
import Profile from "@/components/profile/Profile";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/",
      name: "Homepage",
      component: Homepage,
      meta: {
        requiresAuth: true
      }
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
      component: Goodbay,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: Profile
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;

    if (user) {
      next();
    } else {
      next({
        name: "Login"
      });
    }
  } else {
    next();
  }
});

export default router;
