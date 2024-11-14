import { UserDTO } from '../../DTO/authDTO';
import { axiosClient } from '../../network/appClient';
import useToken from '../../store/useToken';
import { handleResponse } from './utils.service';

interface ResponseProps {
    profile?: UserDTO;
    error?: string;
}

export default async function fetchMyProfile() : Promise<ResponseProps>{
    const rawResponse = await axiosClient.get('/api/MyProfile', {
        headers: {
            Authorization: `Bearer ${useToken.getState().token}`,
        },
        validateStatus: () => true,
    });

    const [profile, error] = handleResponse<UserDTO>(rawResponse);

    if (error || !profile) return { error };

    return { profile: profile };
};