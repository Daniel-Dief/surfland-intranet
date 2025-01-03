import { QueryClient } from '@tanstack/react-query';
import useToken from '../../store/useToken';

export default async function logOut ( queryClient : QueryClient) {
    useToken.getState().setToken(null);
    queryClient.resetQueries({ queryKey: ['MyProfile'] });
};