const c1 = () => import(/* webpackChunkName: "page--src--templates--events-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/templates/Events.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--schedule-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Schedule.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--grounds-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Grounds.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--calendar-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Calendar.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Index.vue")

export default [
  {
    path: "/events/we-stand-with-the-strand-a-sign-making-workshop/",
    component: c1
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-1/",
    component: c1
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-2/",
    component: c1
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-3/",
    component: c1
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale/",
    component: c1
  },
  {
    path: "/events/who-are-we/",
    component: c1
  },
  {
    path: "/schedule/",
    component: c2
  },
  {
    path: "/grounds/",
    component: c3
  },
  {
    path: "/calendar/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
