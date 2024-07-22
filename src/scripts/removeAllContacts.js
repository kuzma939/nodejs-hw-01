import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
        console.log("Усі контакти успішно видалені.");
    } catch (error) {
        console.error("Помилка під час видалення контактів:", error);
    }

};

removeAllContacts();
