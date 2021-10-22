<script setup>
import { BASE_URL } from '@/config'
import { ref, watch } from 'vue';
import dayjs from 'dayjs'
import Lesson from './components/lesson.vue';
<<<<<<< HEAD
import { DatePicker } from 'v-calendar';
const agenda = ref([])
const date = ref(new Date())
const user = 'mathieu.janio'

const fetchData = (newDate, newUser) => {
  const formatedDay = dayjs(newDate).format('MM-DD-YYYY')
  fetch(`${BASE_URL}/edt/${newUser}/${formatedDay}`)
    .then(response => response.json()).then(response => {
      console.log(response);
      agenda.value = response
    })
}
watch(date,
  (newDate, prevDate) => {
    console.log('new data...');
    fetchData(newDate, user)
  }
)
=======
console.log('BASE_URL', BASE_URL);
const agenda = ref()
fetch(`${BASE_URL}/edt/mathieu.janio/10-04-21`)
  .then(response => response.json()).then(response => {
    console.log(response);
    agenda.value = response
  })
>>>>>>> 206630d5b7f3c063527bcc5ab1132055b5003211
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl">EDT EPSI</h1>
    {{ date }}
    <DatePicker class="inline-block h-full" v-model="date">
      <template v-slot="{ inputValue, togglePopover }">
        <div class="flex items-center">
          <button class="p-2 dark:bg-gray-800" @click="togglePopover()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
              />
            </svg>
          </button>
          <input
            :value="inputValue"
            class="dark:bg-gray-800 text-white w-full py-1 px-2 appearance-none border rounded-r"
            readonly
          />
        </div>
      </template>
    </DatePicker>
    <div class="flex flex-wrap justify-evenly">
      <div v-for="lesson in agenda" class="m-4">
        <Lesson class="mt-2" :lesson="lesson" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
