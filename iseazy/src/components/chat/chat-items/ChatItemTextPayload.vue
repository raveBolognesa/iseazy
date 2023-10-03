<template>
  <div :class="[
      'chat-item-text ',
      `chat-item-text__${$props.userName}`,
      ' w-full '
  ]">
    <img class=" chat-item-text__img w-10 h-10 rounded-full" :src="$props.userAvatar" alt="Rounded avatar">
    <div class="  w-full rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 p-4">
      {{ $props.payload.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatItem } from '@/components/chat/chatItem.types'

defineProps<ChatItem>()
</script>

<style lang="scss" scoped>
.chat-item-text {
  display: flex;
  flex-direction: row;
  .chat-item-text__img {
    margin-right: 8px;
  }

  &__user {
    flex-direction: row-reverse;
    align-self: flex-end;

    .chat-item-text__img {
      margin-left: 8px;
      margin-right: initial;

    }
  }
}
</style>
