# svoya-igra
Регистрируемся в игре и можем начинать

/Users/andrejkonkin/Desktop/Elbrus/Phase 3/svoya-igra/client/public/Снимок экрана 1.png

Алгоритмы сравнивают ваш ответ с правильным и добавляют вам очки

/Users/andrejkonkin/Desktop/Elbrus/Phase 3/svoya-igra/client/public/Снимок экрана 2.png

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