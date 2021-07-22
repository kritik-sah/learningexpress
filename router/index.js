const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');

router.get('/',(req, res) => {
    res.render('index' , {
        title: 'Kritik Express Home'
    });
} );
router.get('/about',(req, res) => {
    res.render('about', {
        title: 'Kritik Express About Us'
    });
} );
router.get('/api/products', apiKeyMiddleware , (req, res) => {
    res.json([
        {
            id: 1,
            name:'kritik',
            lname: 'sah'
        },
        {
            id: 2,
            name:'ankit',
            lname: 'sah'
        }
    ]);
});


module.exports = router;