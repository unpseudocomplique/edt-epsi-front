<script setup>
import { BASE_URL } from '@/config'
console.log('BASE_URL', BASE_URL);
fetch(`${BASE_URL}/edt/mathieu.janio/10-04-21`).then(response => {
  console.log('data :', response);
})
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl">EDT EPSI</h1>
  </div>
</template>

<style>
</style>
