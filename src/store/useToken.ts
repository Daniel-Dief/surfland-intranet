import { create } from 'zustand';

interface State {
    token: string | null;
    setToken: (d: string | null) => void;
}

const useToken = create<State>(set => ({
    token: localStorage.getItem("token") || null,
    setToken: token => {
        set({ token });

        if (!token) return localStorage.removeItem('token');
        localStorage.setItem('token', token);
    },
}));

export default useToken;