export default [
  {
    name: "Counter Base",
    path: "/counter-0",
    component: () => import("./demo0/DemoCounter.vue"),
  },
  {
    name: "Counter Props & Events",
    path: "/counter-1",
    component: () => import("./demo1/DemoCounter.vue"),
  },
  {
    name: "State management",
    path: "/counter-4",
    component: () => import("./demo4/DemoCounter.vue"),
  },
  {
    name: "Server",
    path: "/server",
    component: () => import("./demo5/Server.vue"),
  },
  {
    name: "Demo button",
    path: "/demo-button",
    component: () => import("./demo6/DemoButton.vue"),
  },
  {
    name: "Bouncing Ball",
    path: "/bouncing-ball",
    component: () => import("./demo6/BouncingBall.vue"),
  },
  {
    name: "Bouncing Ball JavaScript",
    path: "/bouncing-ball-js",
    component: () => import("./demo6/BouncingBallJavaScript.vue"),
  },
  {
    name: "Animated Routes",
    path: "/animated-routes",
    component: () => import("./demo6/AnimatedRoutes.vue"),
    children: [
      {
        path: "/animated-routes/component-a",
        name: "componentA",
        component: () => import("./demo6/ComponentA.vue"),
      },
      {
        path: "/animated-routes/component-b",
        name: "componentB",
        component: () => import("./demo6/ComponentB.vue"),
      },
    ],
  },
];
