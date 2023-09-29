import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Modal from '../Modal.vue'
import { beforeAll } from "vitest";

// Catch to block resize observer error in unit test
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
      observe() {
      }
      unobserve() {
      }
      disconnect() {
      }
    };
  });

describe('Modal', () => {

  it('renders properly', async () => {
    const wrapper = mount(Modal, { props: { open: true }, emits: {toggle: console.log } })
    expect(wrapper.exists())
    expect(wrapper.html()).toContain('teleport')
  })
})
