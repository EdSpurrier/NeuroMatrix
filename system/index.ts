import useNoteStore from './store/noteStore';
import { json } from "./utils/jsonUtils";
import { clipboard } from "@/system/utils/clipboardUtils";

const system = {
    useNote: useNoteStore,

    utils: {
        json,
        clipboard
    }
}

export default system;