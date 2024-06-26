import { create } from 'zustand';
import system from "@/system";

type Data = {
    name: string;
    type: string;
    data: any;
};

type Store = {
    editorActive: boolean;
    setEditorState: (state: boolean) => void;
    data: Data[];
    loadData: (data: Data[]) => void;
    currentData: Data;
    newData: () => void;
    createData: (name: string, type: string, data: any) => void;
    removeDataByIndex: (index: number) => void;
    removeDataByName: (name: string) => void;
    updateData: (index: number, newData: Data) => void;
    searchData: (searchTerm: string) => Data[];
};

const useNoteStore = create<Store>((set, get) => ({
    editorActive: false,
    data: [],
    currentData: {
        name: '',
        type: '',
        data: '',
    },
    loadData: (data) => {
        const loadedData = system.utils.json.loadJSON('../../db/database.json');
        console.log('Loaded data:', {
            loadedData,
            data,
        })
        set({ data })
    },
    setEditorState(state) {
        set({ editorActive: state });
    },
    newData: () => set((state) => ({ data: [...state.data, { name: '', type: '', data: '' }] })),
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
