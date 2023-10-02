import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ChatItem from '../ChatItem.vue'

const msgFile = {
                  userName: "user",
                  userAvatar: "avatar_user.jpg",
                  type: "ChatItemFilePayload",
                  date: new Date(),
                  payload: {
                    title: "Archivo 1",
                    fileName: "archivo1.pdf",
                    type: "application/pdf",
                    size: 2048, // Tamaño en bytes
                    uploadDate: new Date()
                  }
                }
const msgText = {
                  userName: "user",
                  userAvatar: "avatar_user.jpg",
                  type: "ChatItemTextPayload",
                  date: new Date(),
                  payload: {
                    message: "Hola, ¿puedes revisar el archivo que acabo de enviarte?"
                  }
                }

describe('ChatItem', () => {

  it('renders properly text', async () => {
    const wrapper = mount(ChatItem, { props: msgText })
    expect(wrapper.exists())
    expect(wrapper.html()).toContain(msgText.payload.message)
  })
  it('renders properly payload', async () => {
    const wrapper = mount(ChatItem, { props: msgFile })
    expect(wrapper.exists())
    expect(wrapper.html()).toContain(msgFile.payload.fileName)
  })
})
