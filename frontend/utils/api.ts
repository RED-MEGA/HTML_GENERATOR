const PORT = 8000;

export const API_HOST = `http://localhost:${PORT}`;

export const Api = {
	upload: `${API_HOST}/upload`,
	keywords: `${API_HOST}/keywords`,
	viewHtml: `${API_HOST}/keywords/view-html`,
	downloadHtml: `${API_HOST}/keywords/download-html`,
};
