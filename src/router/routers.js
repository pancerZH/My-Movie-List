const routers = [
    {
        path: "/movie-list",
        name: "movie-list",
        component: (resolve) => require(['../components/MovieList.vue'], resolve)
    },
    {
        path: "/movie-detail/:id",
        name: "movie-detail",
        component: (resolve) => require(['../components/Detail.vue'], resolve)
    },
    {
        path: "/",
        redirect: "movie-list"
    },
]
export default routers
