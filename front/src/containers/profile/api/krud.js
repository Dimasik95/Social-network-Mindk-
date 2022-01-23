import {apiClient} from '../../../config/axios'

export const getProfile = async (id) => {
    return apiClient.get(`/users/${id}`);
}