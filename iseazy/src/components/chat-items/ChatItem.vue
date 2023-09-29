<template>
  <div class="mb-5 text-gray-900">
    <Component :is="$props.payload && $props.payload.size ? ChatItemFilePayload : ChatItemTextPayload" v-bind="$props" />
  </div>
</template>

<script setup lang="ts">

import {
  ChatItem
} from "@/components/chat-items/chatItem.types";

import ChatItemFilePayload from "@/components/chat-items/ChatItemFilePayload.vue";
import ChatItemTextPayload from "@/components/chat-items/ChatItemTextPayload.vue";

defineProps<ChatItem>()
</script>

<style lang="scss" scoped>

</style>
