import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'UTF-8');
        const contacts = JSON.parse(data);

        // Перевіряємо чи є контакти
        if (contacts.length > 0) {
            contacts.pop(); // Видаляємо останній контакт

            //Запит оновленого масиву контактів
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
            console.log("Останній контакт видалено.");
        } else {
            console.log("Немає контактів для видалення.");
        }
    } catch (error) {
        console.error("Помилка під час видалення останнього контакту:", error);
    }
};

removeLastContact();
