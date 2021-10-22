<script setup>
const props = defineProps({
    lesson: Object
})
</script>

<template>
    <div class="p-4 lesson-item rounded-lg shadow-lg">
        <p class="font-bold">{{ lesson.name }}</p>
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
</style>