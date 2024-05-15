const express = require('express');
const expressNunjucks = require('express-nunjucks').default;
const Routes = require('./src/routes/routes');

class App {
    static main() {
        const app = express();
        const PORT = 8000;

        app.set('views', __dirname + '/src/views');
        app.set('view engine', 'njk')
        const njk = expressNunjucks(app);

        app.use('/api', Routes.api());
        app.use('/', Routes.web());

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
}

App.main();