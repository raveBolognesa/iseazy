<template>
  <div class="flex justify-between w-full items-center">
    <div class="p-4 rounded-lg">
      <div class="text-xl font-semibold mb-2">
        {{ $props.payload.title }}
      </div>
      <div  @click="()=>openFile($props.payload.fileName)" class="text-blue-600 mb-2 cursor-pointer pointer-events-auto	pointer-events-auto	hover:pointer-events-auto">
        {{ $props.payload.fileName }}
      </div>
      <div class="text-sm text-gray-500">
        {{ $props.payload.type }} {{ formatDate($props.payload.uploadDate) }}
      </div>
    </div>
    <div @click="()=>openFile($props.payload.fileName)" class="cursor-pointer pointer-events-auto	hover:pointer-events-auto">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatItem } from '@/components/chat/chatItem.types'
const formatDate = (date) => {
  return new Date(date).getMonth()+'.'+new Date(date).getFullYear()
}
const openFile = (file) => {
  window.open(file, '_blank')
}
defineProps<ChatItem>()
</script>

<style scoped></style>
