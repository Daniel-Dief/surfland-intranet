import { UserDTO } from '../DTO/authDTO';
import { create } from 'zustand';

interface State extends UserDTO {
    setUser: (newState: UserDTO) => void;
}

const useUser = create<State>(set => ({
    userId: 0,
    personId: 0,
    name: '',
    document: '',
    birthDate: '',
    email: '',
    foreigner: 0,
    phone: '',
    accessProfileId: null,
    statusId: null,
    setUser: (newState: UserDTO) => {
        set(newState);
        console.log('newState', newState);
    }
}));

export default useUser;