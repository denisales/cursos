require([
    'vue', 'vue-router', './rooms-create.component', './rooms.component'
], function (Vue, VueRouter, RoomsCreateComponent, RoomsComponent) {
    Vue.use(VueRouter);

    var appComponent = Vue.extend({});

    var router = new VueRouter();

    router.map({
        '/chat/:room': {
            component: require('./chat.component')
        },
        '/rooms': {
            component: RoomsComponent
        },
        '/rooms-create': {
            component: RoomsCreateComponent
        }
    })

    router.start(appComponent, '#app')

})
