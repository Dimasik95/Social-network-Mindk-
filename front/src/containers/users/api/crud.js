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
