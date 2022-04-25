import { Server } from 'miragejs';

export const getUser = (server: Server) => {
  return server.get('users');
};
