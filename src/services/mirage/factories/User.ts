import { User } from '@app/interfaces/User';
import { Factory } from 'miragejs';

export const UserFactory = Factory.extend({
  id(i) {
    return i;
  },
  firstName(i) {
    return `First ${i}`;
  },
  lastName(i) {
    return `Last ${i}`;
  },
});
