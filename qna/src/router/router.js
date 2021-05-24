const Question = {
    template: '<div>Question {{ $route.params.id }}</div>',
    watch: {
        $route(to, from) {
          // react to route changes...
        }
    }
}

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/question/:id', 
        component: Question, 
        // component: () => {
        //     import()
        // };
        }
    ]
})

const app = new Vue({
    router
}).$mount('#app')