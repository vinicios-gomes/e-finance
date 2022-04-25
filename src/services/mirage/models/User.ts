import { User } from '@app/interfaces/User';
import { Model } from 'miragejs';

export const UserModel = Model.extend<Partial<User>>({});
