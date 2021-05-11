const Question = {
    template: '<div>Question</div>'
}

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/question/:id', 
        name: 'Questions', 
        // component: () => {
        //     import()
        // };
        }
    ]
})

const app = new Vue({
    router
}).$mount('#app')