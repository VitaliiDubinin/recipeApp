## package.json

{
"name": "recipeapp",
"homepage": "https://VitaliiDubinin.github.io/recipeApp/",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/jest-dom": "^5.16.4",
"@testing-library/react": "^13.2.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^0.27.2",
"gh-pages": "^4.0.0",
"json-server": "^0.17.0",
"react": "^18.1.0",
"react-dom": "^18.1.0",
"react-player": "^2.10.1",
"react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
},

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"server": "json-server -p3010 --watch ./json_files/db.json",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
},

manifest:
{
"short_name": "Recipe App",
"name": "Recipe App for Children",

"start_url": "https://vitaliidubinin.github.io/recipeApp/"
}

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"server": "json-server -p3010 --watch ./json_files/db.json"
},
