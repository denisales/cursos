// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6B5884XJNlJlsFi4gph7Ml_2VZUp3-5Y",
    authDomain: "chat-vuejs-184a6.firebaseapp.com",
    databaseURL: "https://chat-vuejs-184a6.firebaseio.com",
    projectId: "chat-vuejs-184a6",
    storageBucket: "chat-vuejs-184a6.appspot.com",
    messagingSenderId: "84265754060"
};
var firebaseApp = firebase.initializeApp(config);

//cria componente
var chatComponent = Vue.extend({
    template: `
            <style type="text/css">
                .chat {
                    padding: 0;
                }

                .chat li {
                    margin-bottom: 10px;
                    padding-bottom: 10px;
                }

                .chat li.left .chat-body {
                    margin-left: 100px;
                }

                .chat li.right .chat-body {
                    text-align: right;
                    margin-right: 100px;
                }

                .panel-body {
                    overflow-y: scroll;
                    height: 400px;
                }
            </style>
            <div class="panel panel-primary">
                <div class="panel-heading">Chat</div>
                <div class="panel-body">
                    <ul class="chat list-unstyled">
                            <li class="clearfix" v-bind:class="{left: !isUser(o.email), right: isUser(o.email)}" v-for="o in chat.messages">
                            <span v-bind:class="{'pull-left': !isUser(o.email), 'pull-right': isUser(o.email)}">
                                <img v-bind:src="o.photo" alt="" class="img-circle">
                            </span>
                            <div class="chat-body">
                                <strong>{{o.name}}</strong>
                                <p>
                                    {{o.text}}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input type="text" class="form-control input-md" placeholder="Digite uma mensagem" />
                        <span class="input-group-btn">
                            <button class="btn btn-success btn-md">Enviar</button>
                        </span>
                    </div>
                </div>
            </div>
    `,
    data: function () {
        return {
            user: {
                email: 'luiz@gmail.com',
                name: 'Luiz Carlos'
            },
            chat: {
                messages: [
                    {
                        email: 'fulano@gmail.com',
                        text: 'Mensagem 1',
                        name: 'Fulano',
                        photo: 'http://placehold.it/50/000fff/fff&text=00'
                    },
                    {
                        email: 'luiz@gmail.com',
                        text: 'Mensagem 2',
                        name: 'Luiz Carlos',
                        photo: 'http://placehold.it/50/ff0000/fff&text=EU'
                    }
                ]
            }
        }
    },
    methods: {
        isUser: function (email) {
            return this.user.email == email
        }
    }
});

var db = firebaseApp.database();

var roomsComponent = Vue.extend({
    template: `
    <div class="col-md-4" v-for="o in rooms">
        <div class="panel panel-primary">
            <div class="panel-heading">
                {{o.name}}
            </div>
            <div class="panel-body">
                {{o.description}}
                <br>
                <a href="javascript:void(0)" @click="goToChat(o)">Entrar</a>
            </div>
        </div>
    </div>
    <input type="text" v-model="text" @keyup.enter="insertData" />
    <ul>
        <li v-for="o in array">
            {{o.text}}
        </li>
    </ul>
    `,

    firebase:{
        array: db.ref('array')
    },
    data: function () {
        return {
            rooms: [
                { id: "001", name: "PHP", description: "Entusiasta do PHP" },
                { id: "002", name: "Java", description: "Developer experts" },
                { id: "003", name: "C#", description: "Os caras do C#" },
                { id: "004", name: "C++", description: "Fissurados por programação" },
                { id: "005", name: "Javascript", description: "Olha a web aí!" },
                { id: "006", name: "Vue.js", description: "Chat dos caras do data-binding" },
            ]
        }
    },
    methods: {
        goToChat: function(room){
            this.$route.router.go('/chat/'+room.id)
            console.log(room.id)
        },
        insertData: function(){
            this.$firebaseRefs.array.push({
                text: this.text
            })
        }
    }
})

var appComponent = Vue.extend({});

var router = new VueRouter();

router.map({
    '/chat/:room': {
        component: chatComponent
    },
    '/rooms': {
        component: roomsComponent
    }
})

router.start(appComponent, '#app')