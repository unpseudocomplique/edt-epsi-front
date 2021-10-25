<script setup>
const props = defineProps({
    lesson: Object
})
</script>

<template>
    <div class="p-4 lesson-item rounded-lg shadow-lg bg-gray-800">
        <div class="flex items-center justify-between">
            <p class="font-bold">{{ lesson.name }}
            <hr v-if="lesson.color" :style="`border-color:${lesson.color};`" class="lesson-underline mt-1 mb-2 border-2 rounded"></p>
            <!-- <div
                :style="`background-color:${lesson.color};box-shadow: 0px 1px 4px #06101f7a;`"
                class="rounded shadow-2xl w-4 h-4"
            ></div>-->
        </div>
        <div>
            <i>{{ lesson.startHour }} - {{ lesson.endHour }}</i>
            <div class="flex justify-between">
                <p>{{ lesson.teacher }}</p>
                <p>{{ lesson.room }}</p>
            </div>
        </div>
    </div>
</template>
<style>
.lesson-item {
    width: 400px;
    max-width: 80vw;
    background-color: #5030;
}
.lesson-underline{
    width:80%;
}
</style>