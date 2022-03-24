const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path')
const { port } = require('./setting')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use('/static', express.static(path.join(__dirname, 'public')))
const { pageRoute } = require('./routers')

app.use(pageRoute)

app.listen(port, ()=>{
    console.log(`listen to port ${port}`);
});