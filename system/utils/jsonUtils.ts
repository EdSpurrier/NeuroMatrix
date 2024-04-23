const loadJSON = async (filePath: string) => {
	try {
		// Import the JSON file using Next.js' require() function
		const jsonFile = require('../path/to/your/json/file.json');
		// Parse the JSON string to JavaScript object
		return JSON.parse(jsonFile);
	} catch (error) {
		console.error(`Error loading JSON file: ${error}`);
		return null;
	}
}

const saveJSON = (data: any): void => {
	try {
		// Convert the JavaScript object to JSON string
		const jsonString = JSON.stringify(data, null, 2);
		console.info("Not connected....", jsonString);
	} catch (error) {
		console.error(`Error saving JSON file: ${error}`);
	}
}

export const json = {
	loadJSON,
	saveJSON
}