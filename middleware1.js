const express = require('express');
const app = express();

function middleware(req, res, next) {
    const age = req.query.age;
    if(age>=14) {
        next();
    }
    else {
        res.json({
            msg: "sorry you are not age of yet",
        });
    }
}
app.use(middleware)
app.get("/ride", function(req, res, next) {
    res.json({
        msg: "you have been ride",
    });
});

app.get("/side", function(req, res, next) {
    res.json({
        msg: "You are in ride-2",
    });
});
app.listen(3000);