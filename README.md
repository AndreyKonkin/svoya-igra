# svoya-igra
Регистрируемся в игре и можем начинать

![Иллюстрация к проекту](https://github.com/andreykonkin/svoya-igra/raw/main/image1.png)

Алгоритмы сравнивают ваш ответ с правильным и добавляют вам очки

![Иллюстрация к проекту](https://github.com/AndreyKonkin/svoya-igra/raw/main/image2.png)

Installation
Установка

Для работы требуется Node.js v10+.

Установите зависимости и devDependencies и запустите сервер.
подробнее ниже


npm i <br>
rename file envExample to .env <br>
create data base and fill the env file with your data <br>
npx sequelize-cli db:migrate <br>
npx sequelize-cli db:seed:all <br>
cd client <br>
npm start <br>
cd server <br>
npm start
