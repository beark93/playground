import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GameTimer from '../game/GameTimer.vue'

describe('GameTimer', () => {

  it('integer test', () => {
    const time = 13
    const wrapper = mount(GameTimer, {
      props: {
        time
      }
    })
    expect(wrapper.text()).toContain('13.00')
  })

  it('tenth test', () => {
    const time = 10.1
    const wrapper = mount(GameTimer, {
      props: {
        time
      }
    })
    expect(wrapper.text()).toContain('10.10')
  })

  it('hundredth test', () => {
    const time = 8.52
    const wrapper = mount(GameTimer, {
      props: {
        time
      }
    })
    expect(wrapper.text()).toContain('8.52')
  })

  it('zero test', () => {
    const time = 0
    const wrapper = mount(GameTimer, {
      props: {
        time
      }
    })
    expect(wrapper.text()).toContain('0.00')
  })
})
