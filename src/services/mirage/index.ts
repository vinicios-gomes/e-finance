import { Server, createServer, Serializer, Model, Factory } from 'miragejs';
import { UserModel } from './models/User';
import { UserFactory } from './factories/User';
import { getUser } from './routes';

export const makeServer = (): Server => {
  return createServer({
    serializers: {
      application: Serializer.extend({
        embed: true,
        root: false,
      }),
    },

    models: {
      user: UserModel,
    },

    factories: {
      user: UserFactory,
    },

    seeds(server) {
      server.createList('user', 5);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      getUser(this);

      this.passthrough();
    },
  });
};
