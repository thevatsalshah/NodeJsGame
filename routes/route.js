const express = require('express');
const router = express.Router();
        
//add Contact
router.post('/createplayer', (req, res, next) => {
    res.json({
                msg: 'Hello to world'
            });

});

module.exports = router;