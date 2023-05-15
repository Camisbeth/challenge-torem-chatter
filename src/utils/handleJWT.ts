export const saveJWT = (JWT: Record<string, string>) => {
  localStorage.setItem('JWT', JSON.stringify(JWT));

  return;
};

export const deleteJWT = () => {
  localStorage.removeItem('JWT');

  return;
};

export const getJWT = () => {
  const JWT = localStorage.getItem('JWT');

  if (!JWT) return;

  return JSON.parse(JWT);
};
