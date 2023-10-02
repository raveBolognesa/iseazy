import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Modal from '../Modal.vue'

describe('Modal', () => {
  it('renders properly', async () => {
    const wrapper = mount(Modal, { props: { open: true }, emits: { toggle: console.log } })
    expect(wrapper.exists())
    expect(wrapper.html()).toContain('Comentarios')
  })
  it('disapears properly', async () => {
    const wrapper = mount(Modal, { props: { open: true }, emits: { toggle: console.log } })
    expect(!wrapper.isVisible())
  })
})
