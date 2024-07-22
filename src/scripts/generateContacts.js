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
    } catch (error) {
        console.error("Помилка під час роботи з файлом:", error);
    }
    const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

generateContacts(5);
