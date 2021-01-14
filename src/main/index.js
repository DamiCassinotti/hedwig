let express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    homeRoutes = require('./route/homeRoutes'),
	config = require('./config.json');

var pg = require('pg'),
	connectionString = process.env.DATABASE_URL || config.database;
console.log('Connecting to database: ' + connectionString);
client = new pg.Client(connectionString);

bootstrapApp = () => {
    let app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/webapp'));

    app.use("/", homeRoutes);

    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.use(function(req, res, next) {
        res.status(404).send('Sorry cant find that!');
    });

    return app;
};

const server = {
    start: (onStart) => {
        let app = bootstrapApp();
		client.connect();
        app.listen(port, () => onStart(port));
    },
    bootstrapApp
};

server.start((port) => {
    console.log('App successfully started on port ' + port);
});
