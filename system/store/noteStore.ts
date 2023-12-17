import { create } from 'zustand';

type Data = {
    name: string;
    type: string;
    data: any;
};

type Store = {
    data: Data[];
    currentData: Data | null;
    createData: (name: string, type: string, data: any) => void;
    removeDataByIndex: (index: number) => void;
    removeDataByName: (name: string) => void;
    updateData: (index: number, newData: Data) => void;
    searchData: (searchTerm: string) => Data[];
};

const useNoteStore = create<Store>((set, get) => ({
    data: [],
    currentData: null,
    createData: (name, type, data) => set((state) => ({ data: [...state.data, { name, type, data }] })),
    removeDataByIndex: (index) => set((state) => ({ data: state.data.filter((_, i) => i !== index) })),
    removeDataByName: (name) => set((state) => ({ data: state.data.filter((data) => data.name !== name) })),
    updateData: (index, newData) => set((state) => {
        const updatedData = [...state.data];
        updatedData[index] = newData;
        return { data: updatedData };
    }),
    searchData: (searchTerm) => {
        return get().data.filter((data) => data.name.includes(searchTerm));
    },
}));

export default useNoteStore;
