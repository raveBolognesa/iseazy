<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const open = ref(true)
const toggle: (e: boolean)=>void = (e: boolean) => {
  open.value = false
}
</script>

<template>
  <main>
    <button type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" @click="open = true">Chat</button>
    <Modal :open="open" @toggle="toggle"/>
  </main>
</template>
