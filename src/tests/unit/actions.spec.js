/*eslint-disable */

jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import userFixture from './fixtures/user'
describe('store actions', () => {
  let commit
  beforeEach(() => {
    commit = jest.fn()
  })
  it('searches for user', async () => {
    // arrange
    const expectedUser = 'kuroski'
    
    // act
    await actions.searchUser({ commit }, { username: expectedUser })
    await flushPromises()
    
    // assert
    // ожидаем вызов службы API с переданными в нее данными
    expect(api.searchUser).toHaveBeenCalledWith(expectedUser)
    expect(commit).toHaveBeenCalledWith('setUser', userFixture)
  })
})