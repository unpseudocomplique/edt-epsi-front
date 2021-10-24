<script setup>
import { BASE_URL } from '@/config'
import { ref, watch } from 'vue';
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import Lesson from './components/lesson.vue';
import { DatePicker } from 'v-calendar';
import { addColorsToLessons } from './services';
import LoaderLesson from './components/loaderLesson.vue';
import { useStorage } from '@vueuse/core'
const agenda = ref([])
const date = ref(new Date())
const user = useStorage('username', '')
const isLoading = ref(false)

const fetchData = (newDate, newUser) => {
  const formatedDay = dayjs(newDate).format('MM-DD-YYYY')
  isLoading.value = true
  fetch(`${BASE_URL}/edt/${newUser}/${formatedDay}`)
    .then(response => response.json()).then(response => {
      agenda.value = addColorsToLessons(response)
      console.log(agenda.value);
    }).finally(() => isLoading.value = false)
}
watch(date,
  (newDate, prevDate) => {
    console.log('new data...');
    fetchData(newDate, user.value)
  }
)
fetchData(date.value, user.value)
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl">EDT EPSI</h1>
    <div class="flex items-end mt-3">
      <label class="flex flex-col w-min mr-2">
        prénom.nom
        <input placeholder="mathieu.janio" class="bg-gray-800 p-1 rounded" type="text" v-model="user" />
      </label>
      <DatePicker class="inline-block h-full" v-model="date">
        <template v-slot="{ inputValue, togglePopover }">
          <div class="flex items-center">
            <button class="p-2 rounded-l bg-gray-800" @click="togglePopover()">
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
              @click="togglePopover"
              :value="inputValue"
              class="dark:bg-gray-800 text-white w-full py-1 px-2 appearance-none rounded-r"
              readonly
            />
          </div>
        </template>
      </DatePicker>
    </div>
    <div class="flex flex-wrap justify-evenly flex-col mt-10">
      <transition name="fade" mode="out-in">
        <div v-if="isLoading">
          <LoaderLesson class="mt-2" v-for="item in [0, 1, 2, 3]" :key="item" />
        </div>
        <div v-else>
          <h2 class="text-xl">{{ dayjs(date).locale('fr').format('dddd D MMMM') }}</h2>
          <div v-if="agenda.length > 1" class="m-1">
            <Lesson v-for="lesson in agenda" class="mt-2" :lesson="lesson" />
          </div>
          <div class="text-xl my-4" v-else>Aucun cours trouvé</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
