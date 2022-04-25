const ONE_SECOND_IN_MS = 1000;
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: ONE_SECOND_IN_MS * 15,
} as const;
