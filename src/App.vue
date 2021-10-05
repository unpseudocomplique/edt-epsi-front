<script setup>
import { BASE_URL } from '@/config'
import { ref } from '@vue/reactivity';
import Lesson from './components/lesson.vue';
console.log('BASE_URL', BASE_URL);
const agenda = ref()
fetch(`http://localhost:8080/edt/mathieu.janio/10-04-21`)
  .then(response => response.json()).then(response => {
    console.log(response);
    agenda.value = response
  })
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl">EDT EPSI</h1>
    <div class="flex flex-wrap justify-evenly">
      <div v-for="lessons in agenda" class="m-4">
        <h2>{{ lessons.day }}</h2>
        <Lesson class="mt-2" v-for="lesson in lessons.lessons" :lesson="lesson" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
