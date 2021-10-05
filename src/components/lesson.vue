<script setup>
const props = defineProps({
    lesson: Object
})
</script>

<template>
    <div class="p-4 lesson-item rounded-lg shadow">
        <p class="font-bold">{{ lesson.matiere }}</p>
        <div>
            <i>{{ lesson.heure }}</i>
            <div class="flex justify-between">
                <p>{{ lesson.prof }}</p>
                <p>{{ lesson.salle }}</p>
            </div>
        </div>
    </div>
</template>
<style>
.lesson-item {
    width: 400px;
    max-width: 80vw;
    background-color: v-bind(lesson.color);
}
</style>