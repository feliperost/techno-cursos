<template>
  <div>
    <div v-if="loading">
      <page-loading/>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link 
              :to="{name: 'CursoView', params: {curso: curso.id}}">
                {{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas
              </router-link>
            </h2>
            <p>{{curso.descricao}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"
import PageLoading from '@/components/PageLoading.vue'

export default {
  components: { PageLoading },
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos")
  }
}
</script>

<style>
.cursos-lista li {
  margin-bottom: 50px;
}

.cursos-lista li a:hover {
  color: #4b8;
}
</style>