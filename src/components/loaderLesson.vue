<script setup>
</script>

<template>
    <div class="p-4 lesson-item load-item rounded-lg shadow-lg bg-gray-800 h-32">
        <div class="flex flex items-center justify-between">
            <p class="h-5 w-52 rounded bg-gray-500">
                <!-- <div
                :style="`background-color:${lesson.color};box-shadow: 0px 1px 4px #06101f7a;`"
                class="rounded shadow-2xl w-4 h-4"
                ></div>-->
            </p>
        </div>
        <div>
            <p class="h-3 w-32 my-3 rounded bg-gray-500"></p>
            <div class="flex justify-between">
                <p class="h-5 w-12 rounded bg-gray-500"></p>
                <p class="h-5 w-12 rounded bg-gray-500"></p>
            </div>
        </div>
    </div>
</template>
<style>
.load-item {
    animation: skeleton 1s alternate-reverse infinite;
}
.lesson-item {
    width: 400px;
    max-width: 80vw;
    background-color: #5030;
}
.lesson-underline {
    width: 80%;
}
@keyframes skeleton {
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 0.8;
    }
}
</style>