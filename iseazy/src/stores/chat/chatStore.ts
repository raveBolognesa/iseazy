import {chatList} from "@/stores/chat/chatFakeMessages";
import {defineStore} from "pinia";

export const useChatStore = defineStore('chat', {
    state: () => ({
        conversation: chatList,
    }),

});
