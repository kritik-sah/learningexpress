// npm i express
//importing express
const express = require('express');
const app = express();

//path finder
const path = require('path');

//checking and assigning ports
const PORT = process.env.PORT || 3000;

//view engine
app.set('view engine', 'ejs');

//changing views folder to pages
app.set('views', path.resolve(__dirname) + '/pages');

//assigning static folders
app.use(express.static('public'));

//assigning routes

//inside serverjs file

// app.get('/',(req, res) => {
//     res.render('index' , {
//         title: 'Kritik Express Home'
//     });
// } );
// app.get('/about',(req, res) => {
//     res.render('about', {
//         title: 'Kritik Express About Us'
//     });
// } );

//Inside seprate router file inside router > index.js file

//importing router from routers file
const router = require('./router/index');

//using our routers
app.use(router);


//listning and appling ports
app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`)
}); 