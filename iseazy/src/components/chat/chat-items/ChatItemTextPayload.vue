<template>
  <div>{{ $props.userName }} -- {{ $props.payload.message }}</div>
</template>

<script setup lang="ts">
import { ChatItem } from '@/components/chat/chatItem.types'

defineProps<ChatItem>()
</script>

<style scoped></style>
