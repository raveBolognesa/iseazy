<template>
  <div class="p-10">
    <ChatItem v-for="(chat, index) in conversation" :key="index" v-bind="chat"/>
  </div>
</template>
<script setup lang="ts">
import {useChatStore} from "@/stores/chat/chatStore";
import ChatItem from "@/components/chat/chat-items/ChatItem.vue";
import {computed} from "vue";

const chatStore = useChatStore();

const conversation = computed(() => chatStore.conversation);
</script>
