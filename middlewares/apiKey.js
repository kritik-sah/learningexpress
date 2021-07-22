function apiKey(req, res , next) {
    const api_key = 'hackme' ;
    const userApiKey = req.query.api_key;
    console.log(userApiKey);
    if (userApiKey && (userApiKey === api_key)){
        next();
    } else {
        res.json({ message : 'not allowed'});
    }
    
}

module.exports = apiKey