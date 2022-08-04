<template>
  <div>
    <div v-if="loading">
      <page-loading/>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <div class="div-btn">
            <router-link class="btn-cursos" to="/cursos">Conheça nossos cursos</router-link>
          </div>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p><b>{{avaliacao.nome}}</b></p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda com nossos cursos">
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"
import PageLoading from '@/components/PageLoading.vue'

export default {
  components: { PageLoading },
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home")
  }
}
</script>

<style>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

.div-btn {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>