<script lang="ts">
import Modal from '@/components/Modal.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import ChatList from '@/components/chat/ChatList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Modal,
    ChatList,
    ChatInput
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      console.log(this.open)
      this.open = !this.open
    }
  }
})
</script>

<template>
  <main class="w-full max-w-2xl max-h-full">
    <button
      id="chat-button"
      type="button"
      class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
      @click="open = true"
    >
      Chat
    </button>
    <Modal :open="open" @toggle="toggle">
      <template #default>
        <ChatList />
      </template>
      <template #footer>
        <ChatInput />
      </template>
    </Modal>
  </main>
</template>
