import { apiClient } from '../../../config/axios';

export const getArticles = async () => {
    return apiClient.get('/articles');
};

export const getArticle = async (id) => {
	return apiClient.get(`/articles/${id}`);
};

export const getArticleComments = async (id) => {
	return apiClient.get(`/articles/${id}/comments`);
};

export const addArticle = async (data) => {
	return apiClient.post('/articles', data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

export const editArticle = async (id, data) => {
	return apiClient.put(`/articles/${id}`, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

export const deleteArticle = async (id) => {
	return apiClient.delete(`/articles/${id}`);
};