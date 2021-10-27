<script setup>
import { BASE_URL } from '@/config'
import { ref, watch, reactive } from 'vue';
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import Lesson from './components/lesson.vue';
import { DatePicker } from 'v-calendar';
import { addColorsToLessons, getDatesBetweenDates } from './services';
import LoaderLesson from './components/loaderLesson.vue';
import { useStorage } from '@vueuse/core'
import { useFetch } from './services/useFetch'
const agenda = ref([])
const user = useStorage('username', '')
const range = ref({
  start: new Date(),
  end: new Date()
})
const input = 'YYYY-MM-DD h:mm A'


const fetchData = (newRange, newUser) => {
  const dates = getDatesBetweenDates(newRange.start, newRange.end)
  console.log('dates', dates);
  agenda.value = dates.map(currentDate => {
    const formatedDay = dayjs(currentDate).format('MM-DD-YYYY')
    const request = useFetch({ method: 'GET', url: `${BASE_URL}/edt/${newUser}/${formatedDay}` })
    return {
      formatedDay,
      request
    }
  })
}
watch(range,
  (newDate, prevDate) => {
    fetchData(newDate, user.value)
  }
)
// fetchData(date.value, user.value)
fetchData(range.value, user.value)
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl text-gray-100">EDT EPSI</h1>
    <div class="flex items-end mt-3 flex-wrap">
      <label class="flex flex-col w-min mr-2">
        prénom.nom
        <input
          placeholder="mathieu.janio"
          class="bg-gray-800 p-1 rounded mt-2"
          type="text"
          v-model="user"
        />
      </label>
      <div>
        <span class="block text-gray-100 text-sm text-left mb-2">Select Range</span>
        <DatePicker v-model="range" is-range>
          <template v-slot="{ inputValue, inputEvents, isDragging }">
            <div class="flex flex-col sm:flex-row justify-start items-center">
              <div class="relative flex-grow">
                <svg
                  class="text-gray-100 w-4 h-full mx-2 absolute pointer-events-none"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input
                  class="flex-grow pl-8 pr-2 py-1 bg-gray-800 text-white rounded w-full"
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                />
              </div>
              <span class="flex-shrink-0 m-2">
                <svg class="w-4 h-4 stroke-current text-gray-100" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div class="relative flex-grow">
                <svg
                  class="text-gray-100 w-4 h-full mx-2 absolute pointer-events-none"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input
                  class="flex-grow pl-8 pr-2 py-1 bg-gray-800 text-white w-full"
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                />
              </div>
            </div>
          </template>
        </DatePicker>
      </div>
    </div>
    <div class="flex flex-wrap justify-start flex-row mt-10">
      <div class="mt-10 mx-5" v-for="day in agenda">
        <h2 class="text-xl">{{ dayjs(day.formatedDay).locale('fr').format('dddd MMMM YYYY') }}</h2>
        <div v-if="!day.request.loading">
          <Lesson v-for="lesson in day.request.data" class="mt-2" :lesson="lesson" />
        </div>
        <div v-else="isLoading">
          <LoaderLesson class="mt-2" v-for="item in [0, 1, 2, 3]" :key="item" />
        </div>
        <div
          class="text-xl my-4"
          v-if="!day.request.loading && day.request.data < 1"
        >Aucun cours trouvé</div>
      </div>
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
