# Gow Edu Full stack by Next.js
## run this project on your computer
firstly you need to install node.js globally, lasted LTS version is OK
1. `npm install`
2. `npm run dev`

then this project will run on port:3000 normally 

then open broswer and open localhost:3000

## tech stack
- frontend & backend: React & NextJS
- css: TailwindCSS
- i18n: i18next

## deploy on server
1. install pm2 globally
2. run `pm2 run next start` at project path
3. read pm2 document to get more opera options

## i18n
- english
public/locales/en/
- chinese
public/locales/zh/

need to restart this project when update json

## icons and images
/public/...