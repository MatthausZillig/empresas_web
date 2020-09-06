export const API_URL = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in';

export function USER_POST(body) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
