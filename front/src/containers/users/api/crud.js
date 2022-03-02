import {apiClient} from '../../../config/axios'

export const getUsers = async () => {
    return apiClient.get('/users');
};

export const getUserProfile = async (iduser) => {
	return apiClient.get(`/users/${iduser}`);
};

export const editUserProfile = async (iduser, data) => {
	return apiClient.put(`/users/${iduser}`, data);
};

export const addAvatar = async (iduser, data) => {
	return apiClient.post(`/users/${iduser}/avatar`, data, {
			headers: { 'Content-Type': 'multipart/form-data' },
	});
};