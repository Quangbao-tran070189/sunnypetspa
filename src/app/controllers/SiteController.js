//Home, search, contact

class SiteController {

    //GET / news
    index(req, res) {  //home cung duoc ma index cung duoc
        res.render('home');
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

//Để những site tương tự tại đây: Contact ...
//site: introduce


module.exports = new SiteController;
