<template>
  <div class="flex items-center w-full">
    <input
      id="comment-input"
      v-on:keyup.enter="sendMessagge"
      v-model="newMessage"
      type="text"
      class="w-full border rounded p-2 text-gray-900"
      placeholder="Escribe tu mensaje aquí"
    />
    <button
      @click="sendMessagge"
      class="bg-blue-500 text-white ml-2 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Enviar
    </button>
  </div>
</template>

<script lang="ts">
import { useChatStore } from '@/stores/chat/chatStore'
import { ChatItem } from '@/components/chat/chatItem.types'

export default {
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    sendMessagge() {
      const store = useChatStore()
      if (this.newMessage.trim() !== '') {
        const newChatItem: ChatItem = {
          userName: 'user',
          userAvatar: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
          type: 'ChatItemTextPayload',
          date: new Date(),
          payload: {
            message: this.newMessage
          }
        }

        store.addMessage(newChatItem)
        this.newMessage = ''
      }
    }
  }
}
</script>

<style scoped></style>
