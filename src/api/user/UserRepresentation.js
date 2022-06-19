import Representation from '@/api/Representation';

export default class UserRepresentation extends Representation {
  constructor (properties) {
    super({
      id: null,
      email: null,
      username: null,
      firstName: null,
      lastName: null,
      profilePicture: null,
      roles: [],
      ...properties,
    });
  }
}
