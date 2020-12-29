import Vue from "vue";
import { store } from "./store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		alias: "/all",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
	},
	{
		path: "/submit",
		name: "Submit",
		component: () => import("@/views/Submit.vue"),
	},
	{
		path: "/report",
		name: "Report",
		component: () => import("@/views/Report.vue"),
	},
	{
		path: "/excluded",
		name: "Excluded",
		component: () => import("@/views/Excluded.vue"),
	},
	{
		path: "/watchlist",
		name: "Watchlist",
		component: () => import("@/views/Watchlist.vue"),
	},
	{ path: "*", name: "404", component: () => import("@/views/404.vue") },
];

const router = new VueRouter({
	routes: routes,
	mode: "history",
});

// Update header title to match current page/route
router.afterEach((to) => {
	if (to.name === "About") {
		store.commit("updateTitle", "AboutList");
	} else if (to.name === "Excluded") {
		store.commit("updateTitle", "ExcludedList");
	} else if (to.name === "Watchlist") {
		store.commit("updateTitle", "WatchList");
	} else {
		store.commit("updateTitle", "EncryptedList");
	}
});

export default router;
