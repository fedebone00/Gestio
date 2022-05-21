import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token) {
        try {
            let payload = jwt.verify(token, 'test');
        } catch(error) {
            res.status(400).json({error: error});
            return;
        }
    } else {
        res.status(400).send('Missing jwt');
        return;
    }
    next();
}

const isAuthorized = (req, res, next) => {
    
    next();
}

export {isAuthenticated, isAuthorized};