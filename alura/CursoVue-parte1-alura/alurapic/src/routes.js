import Cadastro from "./components/cadastro/Cadastro.vue"
import Home from "./components/home/Home.vue"

export const routes = [
    {path: '/', component: Home, nome: 'Home'},
    {path: '/cadastro', component: Cadastro, nome: 'Cadastro'}
]