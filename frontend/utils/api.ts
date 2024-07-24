const PORT = process.env.PORT || 3000;

export const API_HOST = `http://localhost:${PORT}`;

export const Api = {
  upload: `${API_HOST}/upload`,
};
