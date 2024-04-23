// src/store/dataStore.ts

import create from 'zustand';

// Define the type for your JSON data
type MyData = {
	// Define the structure of your JSON data
	key: string;
	value: number;
};

// Create your Zustand store
type DataStore = {
	jsonData: MyData[] | null;
	setJsonData: (data: MyData[]) => void;
};

const useDataStore = create<DataStore>((set) => ({
	jsonData: null,
	setJsonData: (data: MyData[]) => set({ jsonData: data }),
}));

// Function to load JSON data from a file
const loadJsonData = async () => {
	try {
		// Import the JSON file using Next.js' require() function
		const jsonData = require('../path/to/your/json/file.json');
		// Update the state with the loaded JSON data
		useDataStore.getState().setJsonData(jsonData);
	} catch (error) {
		console.error('Error loading JSON data:', error);
	}
};

export { useDataStore, loadJsonData };
