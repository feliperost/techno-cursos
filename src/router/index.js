import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import CursosView from '../views/CursosView.vue'
import CursoView from '../views/CursoView.vue'
import AulaView from '../views/AulaView.vue'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView
  },
  {
    path: "/contato",
    name: "ContatoView",
    component: ContatoView
  },
  {
    path: "/cursos",
    name: "CursosView",
    component: CursosView
  },
  {
    path: "/cursos/:curso",
    name: "CursoView",
    component: CursoView,
    props: true,
    children: [
      {
        path: ":aula",
        name: "AulaView",
        component: AulaView,
        props: true
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
