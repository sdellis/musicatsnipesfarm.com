const c1 = () => import(/* webpackChunkName: "page--src--templates--tasks-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/templates/Tasks.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--events-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/templates/Events.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--todos-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Todos.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--schedule-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Schedule.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--calendar-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Calendar.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/Elliss/Development/musicatsnipesfarm.com/src/pages/Index.vue")

export default [
  {
    path: "/tasks/we-need-some-signage/",
    component: c1
  },
  {
    path: "/tasks/support-for-soupcon-comedy/",
    component: c1
  },
  {
    path: "/tasks/private-band-rehearsal-downstairs/",
    component: c1
  },
  {
    path: "/events/we-stand-with-the-strand-a-sign-making-workshop/",
    component: c2
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-1/",
    component: c2
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-2/",
    component: c2
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale-3/",
    component: c2
  },
  {
    path: "/events/yin-yoga-with-bob-lonsdale/",
    component: c2
  },
  {
    path: "/events/those-looks-live-at-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/who-are-we/",
    component: c2
  },
  {
    path: "/events/soupcon-salon-firehouse-clean-up-day/",
    component: c2
  },
  {
    path: "/events/the-highlands-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/shady-groove-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/soupcon-salon-monthly-partners-meeting/",
    component: c2
  },
  {
    path: "/tasks/fix-fountain-pump/",
    component: c1
  },
  {
    path: "/events/rachel-rosemarie-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/rue-musik-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/our-bodies-themselves-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/tasks/curate-first-artshow/",
    component: c1
  },
  {
    path: "/events/october-monthly-soupcon-partners-meeting/",
    component: c2
  },
  {
    path: "/events/little-flowers-live-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/chris-harford-and-jon-thompson-live-at-soupcon-salon/",
    component: c2
  },
  {
    path: "/events/christina-ward-live-at-soupcon-salon/",
    component: c2
  },
  {
    path: "/todos/",
    component: c3
  },
  {
    path: "/schedule/",
    component: c4
  },
  {
    path: "/calendar/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
