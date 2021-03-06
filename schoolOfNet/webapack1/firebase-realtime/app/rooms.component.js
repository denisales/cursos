define('rooms.component',
    [
        'blueimp-md5', 'vue', 'vuefire', './firebase-db', 'bootstrap'
    ], function (md5, Vue, VueFire, db) {

        Vue.use(VueFire);

        module.exports = {
            template: `
    <div class="col-md-4" v-for="o in rooms">
        <div class="panel panel-primary">
            <div class="panel-heading">
                {{o.name}}
            </div>
            <div class="panel-body">
                {{o.description}}
                <br>
                <a href="javascript:void(0)" @click="openModal(o)">Entrar</a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalLoginEmail" tabindex="-1" role="dialog" aria-labelledby="modalLoginEmail">
		  		<div class="modal-dialog" role="document">
		  			<div class="modal-content">
		  				<div class="modal-header">
		  					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		  					<h4 class="modal-title" id="exampleModalLabel"> Entre com as informações </h4>
		  				</div>
		  				<div class="modal-body">
		  					<form>
		  						<div class="form-group">
		  							<input type="text" class="form-control" name="email" v-model="email" placeholder="e-mail">
		  						</div>
		  						<div class="form-group">
		  							<input type="text" class="form-control" name="name" v-model="name" placeholder="Nome">
		  						</div>		  						
		  					</form>
		  				</div>
		  				<div class="modal-footer">
		  					<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
		  					<button type="button" class="btn btn-primary" @click="login">Login</button>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
    `,

            firebase: {
                //referencia
                rooms: db.ref('chat/rooms')
            },
            data: function () {
                return {
                    rooms: [
                        { id: "001", name: "PHP123", description: "Entusiasta do PHP" },
                        { id: "002", name: "Java", description: "Developer experts" },
                        { id: "003", name: "C#", description: "Os caras do C#" },
                        { id: "004", name: "C++", description: "Fissurados por programação" },
                        { id: "005", name: "Javascript", description: "Olha a web aí!" },
                        { id: "006", name: "Vue.js", description: "Chat dos caras do data-binding" },
                    ],
                    name: '',
                    email: '',
                    room: null
                }
            },
            methods: {
                login: function () {
                    localStorage.setItem('name', this.name);
                    localStorage.setItem('email', this.email);
                    localStorage.setItem('photo', 'http://www.gravatar.com/avatar/' + md5(this.email) + '.jpg')
                    $('#modalLoginEmail').modal('hide');
                    this.$route.router.go('/chat/' + this.room.id);
                },
                openModal: function (room) {
                    $('#modalLoginEmail').modal('show');
                    this.room = room
                }
            }
        }
    })

