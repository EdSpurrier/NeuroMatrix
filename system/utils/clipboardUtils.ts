const paste = async () => {
	try {
		return await navigator.clipboard.readText();
	} catch (error) {
		return '';
	}
}
const copy = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {}
}

export const clipboard = {
	paste,
	copy
}