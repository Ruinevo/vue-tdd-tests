import { shallowMount } from '@vue/test-utils'
import VUserSearchForm from '@/components/VUserSearchForm'

// будем тестировать, что при вводе значения v-model работает корректно
// что при нажатии на кнопку генерируется событие search с корректным payload

describe('VUserSearchForm', () => {
  const build = () => {
    const wrapper = shallowMount(VUserSearchForm)

    return {
      wrapper,
      input: () => wrapper.find('.search-form__input'),
      button: () => wrapper.find('.search-form__submit')
    }
  }

  it('при вводе значения в input обновляется состояние компонента', () => {
    const { wrapper, input } = build()

    const expectedValue = 'Привет'

    input().setValue(expectedValue)

    expect(wrapper.vm.searchValue).toBe(expectedValue)
  })

  it('при нажатии на кнопку генерируется событие `search`', () => {
    const { wrapper, input, button } = build()

    const expectedValue = 'Привет'

    input().setValue(expectedValue)

    button().trigger('click')
    button().trigger('click')
    expect(wrapper.emitted().search[0]).toEqual([expectedValue])
  })
})
