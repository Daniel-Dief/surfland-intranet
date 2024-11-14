import { handleResponse } from "./utils.service";
import { axiosClient } from "../../network/appClient";
import useToken from "../../store/useToken";
import { UserDTO } from "../../DTO/authDTO";

interface Props {
    login: string;
}

interface ResponseProps {
    success?: boolean;
    error?: string;
}

export default async function sendRecoverPasswordRequest( payload : Props ): Promise<ResponseProps> {
    const rawResponse = await axiosClient.patch(
        '/api/Login/RecoveryPassword',
        payload,
        {
            headers: {
                Authorization: `Bearer ${useToken.getState().token}`,
            },
            validateStatus: () => true,
        }
    );

    const [, error] = handleResponse<UserDTO>(rawResponse);

    if (error) return { error };

    return { success: true };
};