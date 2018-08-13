<template>
  <div class="corpo">

    <h1 class="titulo">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <div>
      <input type="search" class="filtro" placeholder="busca por titulo.." @input="filtro = $event.target.value">
       <p>{{ conta }}</p>
    </div>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto._id">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform.animate="180" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
          <meu-botao tipo="button" rotulo="Remover" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"></meu-botao>
          <router-link :to="{ name: 'altera', params: {id: foto._id}}"><meu-botao tipo="button" rotulo="Editar"></meu-botao></router-link>
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  data: function() {
    return {
      titulo: "Meu titulo",
      fotos: [],
      filtro: "",
      mensagem: ""
    };
  },

  computed: {
    conta() {
      return `O texto: ${this.filtro}, tem ${this.filtro.length} caracteres`;
    },
    fotosComFiltro() {
      if (this.filtro) {
        // criando uma expressão com o valor do filtro, insensitivo
        let exp = new RegExp(this.filtro.trim(), "i");
        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
       this.resource
        this.service.apaga(foto._id)
        .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          },
          err => {
           this.mensagem = err.message
          }
        )
    }
  },

  created() {

    this.service = new FotoService(this.$resource)

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }
};
</script>

<style lang="scss">
.centralizado {
  text-align: center;
}
.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  -webkit-appearance: none;
  display: block;
  width: 500px;
  padding: 5px;
  font-size: 18px;
  margin: 0 auto;
}
</style>
