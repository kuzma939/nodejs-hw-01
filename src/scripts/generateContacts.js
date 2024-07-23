import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";
const generateContacts = async (number) => {
    try {
        // Читає існуючі контакти асинхронно
        const data = await fs.readFile(PATH_DB, "UTF-8");
        const contacts = JSON.parse(data);

        // Генеруємо нові фейкові контакти
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        // Записуємо оновлений список контактів у файл (асинхр..)
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log(`${number} contacts generated successfully.`);
    } catch (error) {
        console.error("Помилка під час роботи з файлом:", error);
    }
  };
generateContacts(5);
