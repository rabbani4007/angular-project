import { AppUserAuth } from './app-user-auth';

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: 'rabbani',
    bearerToken: 'abi393kdkd9393ikd',
    isAuthenticated: true,
    canAccessNews: true,
  },
  {
    userName: 'arhaan',
    bearerToken: 'abi393kdkd9393ikd',
    isAuthenticated: true,
    canAccessNews: false,
  },
];
