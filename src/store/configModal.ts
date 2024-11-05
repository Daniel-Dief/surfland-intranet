import { create } from 'zustand';

interface ConfigModalState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useConfigModal = create<ConfigModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));