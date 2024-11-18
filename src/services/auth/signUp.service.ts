import { axiosClient } from "../../network/appClient";
import { handleResponse } from "../utils.service";
import { UserDTO } from "../../DTO/authDTO";

interface Props {
    name: string;
    phone: string;
    document: string;
    birthDate: Date;
    email: string;
    foreigner: boolean;
    password: string;
    passwordConfirmation: string;
}

interface ResponseProps {
    body?: never;
    error?: string;
}

export default async function sendSignUpRequest( payload : Props ): Promise<ResponseProps> {
    const rawResponse = await axiosClient.post(
        '/api/OpenSea',
        {
            ...payload,
        },
        {
            headers: {},
            validateStatus: () => true,
        }
    );

    const [, error] = handleResponse<UserDTO>(rawResponse);

    if (error) return { error };

    return {};
};