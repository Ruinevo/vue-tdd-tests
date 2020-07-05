/*eslint-disable */

jest.mock('@/store/actions')

import { shallowMount, createLocalVue } from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import Vuex from 'vuex';
import initialState from '@/store/state'
import actions from '@/store/actions'
import userFixture from './fixtures/user'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state, actions })
    })
    return {
      wrapper,
      VUserSearchForm: () => wrapper.findComponent(VUserSearchForm),
      VUserProfile: () => wrapper.findComponent(VUserProfile)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  it('должен быть отрисован', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('содержит дочерние компоненты', () => {
    const { VUserSearchForm, VUserProfile } = build();
    expect(VUserSearchForm().exists()).toBe(true)
    expect(VUserProfile().exists()).toBe(true)
  })

  it('передает в дочерний компонент данные из стора', () => {
    state.user = userFixture
    const { VUserProfile } = build()
    expect(VUserProfile().vm.user).toBe(state.user)
  })

  it('при вызове события `search` мы вызываем экшен и передаем туда нашего пользователя', () => {
    const expectedUser = 'Rinat'

    const { VUserSearchForm } = build()
    VUserSearchForm().vm.$emit('search', expectedUser)

    expect(actions.searchUser).toHaveBeenCalled()
    expect(actions.searchUser.mock.calls[0][1]).toEqual({ userName: expectedUser })
  })
})
