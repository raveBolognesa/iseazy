<template>
  <div class="p-10 w-full flex flex-col comment-list" id="comment-list" ref="commentList">
    <ChatItem v-for="(chat, index) in conversation" :key="index" v-bind="chat" />
  </div>
</template>
<script setup lang="ts">
import { useChatStore } from '@/stores/chat/chatStore'
import ChatItem from '@/components/chat/chat-items/ChatItem.vue'
import {computed, onMounted, ref, watch} from 'vue'

const chatStore = useChatStore()

const conversation = computed(() => chatStore.conversation)

const commentList = ref<HTMLElement | null>(null)

function scrollToBottom() {
  if (commentList.value) {
    setTimeout(() => {
      commentList.value.scrollTo({
        top: commentList.value.scrollHeight,
        behavior: 'smooth',
      })

    }, 200)
  }
}
onMounted(scrollToBottom)
watch(chatStore.conversation, () => {
  scrollToBottom()
})

</script>
<style lang="scss">
.comment-list {
  width: 100%;
  max-height: 70vh;
  overflow-y: scroll;
}
</style>
