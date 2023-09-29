<template>
 <div>
   {{ $props.payload.fileName }}
   {{ $props.payload.uploadDate }}
 </div>
</template>

<script setup lang="ts">

import {
ChatItem
} from "@/components/chat-items/chatItem.types";

defineProps<ChatItem>()
</script>

<style scoped>

</style>
