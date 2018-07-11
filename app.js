const express = require('express');

const chalk = require('chalk')

const ejs=require('ejs')
const app = new express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views','./src/views')
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('index',{title:'MR:Error',frinds:['Ali','Abas','Issac','Ahmad']});
});

app.listen(3000, () => {
  console.log(`listening on port ${chalk.blue('3000')}`);
});
