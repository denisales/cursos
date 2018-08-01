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
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";
import ImagemResponsiva from "./components/shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva
  },
  data: function() {
    return {
      titulo: "Meu titulo",
      fotos: [],
      filtro: ""
    };
  },

  computed: {
    conta(){
      return `O texto: ${this.filtro}, tem ${this.filtro.length} caracteres`
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

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
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
