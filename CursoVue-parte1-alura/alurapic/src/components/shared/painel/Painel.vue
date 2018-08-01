<template>
        <div class="painel">
          <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
          <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
              <slot></slot><!-- fim painel-corpo -->
            </div>
          </transition>
        </div><!-- fim painel -->
</template>

<script>
export default {
  props: ["titulo"],
  data() {
    return {
      visivel: false
    };
  }
};
</script>

<style lang="scss" scoped>
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

.imagem-responsiva {
  width: 100%;
}

/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active {
  transition: all .5s
}
</style>
