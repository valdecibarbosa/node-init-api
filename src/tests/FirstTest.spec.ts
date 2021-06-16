import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Valdeci'

  expect(user.name).toEqual('Valdeci')
})