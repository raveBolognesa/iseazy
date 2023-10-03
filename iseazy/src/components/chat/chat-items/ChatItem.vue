<template>
  <div :class="['mb-5 text-gray-900 ', ($props.type && $props.type.includes('File') ? 'chat-item__file' : ''), `chat-item chat-item__${$props.userName}`]" v-if="$props.type">
    <Component
      :is="$props.type && $props.type.includes('File') ? ChatItemFilePayload : ChatItemTextPayload"
      v-bind="$props"
    />
  </div>
</template>

<script setup lang="ts">
import { ChatItem } from '@/components/chat/chatItem.types'

import ChatItemFilePayload from '@/components/chat/chat-items/ChatItemFilePayload.vue'
import ChatItemTextPayload from '@/components/chat/chat-items/ChatItemTextPayload.vue'

defineProps<ChatItem>()
</script>

<style lang="scss" scoped>
.chat-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 70%;
  padding: 8px;
  &__user {
    align-items: flex-end;
    align-self: flex-end;
  }
  &__file {
    width: 100%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
}
</style>
