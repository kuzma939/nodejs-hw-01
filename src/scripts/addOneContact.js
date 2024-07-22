import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'UTF-8');
        const contacts = JSON.parse(data);
        // Додаємо новий фейковий контакт
        contacts.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.error("Помилка під час роботи з файлом:", error);
    }
};

addOneContact();
