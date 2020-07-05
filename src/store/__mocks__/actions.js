import userFixture from '@/tests/unit/fixtures/user'

export default {
  /** создаем моковый экшен, который возвращает разрешенный промис со значением фиктивного пользователя */
  searchUser: jest.fn().mockResolvedValue(userFixture)
}
