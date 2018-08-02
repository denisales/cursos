<template>
  <div class="corpo">

    <h1 class="titulo">{{ titulo }}</h1>
    <div>
      <input type="search" class="filtro" placeholder="busca por titulo.." @input="filtro = $event.target.value">
       <p>{{ conta }}</p>
    </div>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
          <meu-botao tipo="button" rotulo="Remover" @botaoAtivado="remove(foto)" :confirmacao="false" estilo="perigo"></meu-botao>
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

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
      filtro: ""
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
        alert("remover a foto " + foto.titulo);
    }
  },

  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise
      .then(res => res.json())
      .then(foto => (this.fotos = foto), err => console.log(err));
    // promise.then(res => {
    //   res.json().then(fotos => this.fotos = fotos)
    // })
  }
};
</script>

<style lang="scss">
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
