const routes = [
  {
    path: "/",
    redirect: "/entry/registration",
    // TODO => check if there is a cookie saved  redirect to '/app' else redirect it to '/entry'
  },
  {
    path: "/entry",
    redirect: "/entry/registration",
    component: () => import('../layouts/Entry.vue'),
    children: [
      {path: "registration", component: () => import("pages/Entry/Registration")}
    ]
  },
  {
    path: '/app',
    redirect: "/app/directories",
    component: () => import('../layouts/Application.vue'),
    children: [
      {path: "directories", component: () => import("pages/Application/Directories")}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
