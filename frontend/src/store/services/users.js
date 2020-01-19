// Bring in the imports from the feathers-client.js file.
import feathersClient, {
  makeServicePlugin,
  BaseModel,
  makeServiceStore,
} from '../../feathers-client';

const servicePath = 'users';

const Model = class User extends BaseModel {
  static modelName = 'User';

  static instanceDefaults() {
    return {
      displayName: '',
      email: '',
      password: '',
      auth0Id: '',
      googleId: '',
      facebookId: '',
    };
  }
};

export default {
  plugin: makeServicePlugin({
    servicePath,
    service: feathersClient.service(servicePath),
    Model,
  }),

  store: makeServiceStore({ servicePath, Model }),
};
