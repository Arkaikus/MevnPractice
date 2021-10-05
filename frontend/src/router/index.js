import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/dashboard/",
        component: () => import("../components/Dashboard/Home.vue"),
      },
      {
        path: "/dashboard/posts",
        name:"PostList",
        component: () => import("../components/Dashboard/Posts/List.vue"),
      },
      {
        path: "/dashboard/posts/save",
        name:"PostCreate",
        component: () => import("../components/Dashboard/Posts/Save.vue"),
      },
      {
        path: "/dashboard/posts/save/:id",
        name:"PostUpdate",
        component: () => import("../components/Dashboard/Posts/Save.vue"),
      },
      {
        path: "/dashboard/products",
        component: () => import("../components/Dashboard/Products/List.vue"),
      },
      {
        path: "/dashboard/products/save",
        name:"ProductCreate",
        component: () => import("../components/Dashboard/Products/Save.vue"),
      },
      {
        path: "/dashboard/products/save/:id",
        name:"ProductUpdate",
        component: () => import("../components/Dashboard/Products/Save.vue"),
      },
      {
        path: "/dashboard/customers",
        component: () =>
          import("../components/Dashboard/Customers/List.vue"),
      },
      {
        path: "/dashboard/customers/save",
        name:"CustomerCreate",
        component: () => import("../components/Dashboard/Customers/Save.vue"),
      },
      {
        path: "/dashboard/customers/save/:id",
        name:"CustomerUpdate",
        component: () => import("../components/Dashboard/Customers/Save.vue"),
      },
    ],
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/Pricing.vue"),
  },
  {
    path: "/features",
    name: "Features",
    component: () => import("../views/Features.vue"),
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: () => import("../views/Heroes.vue"),
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: () => import("../views/Carousel.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
