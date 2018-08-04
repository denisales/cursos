//import Cadastro from "./components/cadastro/Cadastro.vue"
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')

import Home from "./components/home/Home.vue"

export const routes = [
    {path: '/', name: 'home', component: Home, nome: 'Home', menu: true},
    {path: '/cadastro', name: 'cadastro', component: Cadastro, nome: 'Cadastro', menu: true},
    {path: '/cadastro/:id', name: 'altera', component: Cadastro, nome: 'Cadastro', menu: false},
    {path: '*', component: Home, menu: false}

]
