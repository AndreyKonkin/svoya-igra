# svoya-igra
Регистрируемся в игре и можем начинать

![Иллюстрация к проекту] https://github.com/AndreyKonkin/svoya-igra/blob/main/client/public/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%201.png

Алгоритмы сравнивают ваш ответ с правильным и добавляют вам очки

![Иллюстрация к проекту](https://github.com/andrejkonkin/Desktop/Elbrus/Phase 3/svoya-igra/client/public/Снимок экрана 2.png

Installation
Установка

Для работы требуется Node.js v10+.

Установите зависимости и devDependencies и запустите сервер.
подробнее ниже

npm i
rename file envExample to .env
create data base and fill the env file with your data
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd client
npm start
cd server
npm start
