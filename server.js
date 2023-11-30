const express = require('express');
const app = express();
const path = require ('path');
const port = process.env.PORT || 5163;

// Serve static files from the 'public' directory
app .use (express.static (path.join (__dirname, 'public')))
    .use (express.json ())
    .use (express.urlencoded ({extended: true}))
    .set ('views', path.join (__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
