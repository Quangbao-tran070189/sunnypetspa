//index.js  ----- Tất cả các route

const newsRouter = require('./news'); //1. news router
const siteRouter = require('./site'); //2. Home , search, contact


function route(app) {
    //route
                                        //4. contact router
    app.use('/search', siteRouter);     //3. Search router
    app.use('/news', newsRouter);       //1. news router
    app.use('/', siteRouter);           //2. Home router, 
    
}

module.exports = route;