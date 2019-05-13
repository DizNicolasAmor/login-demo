const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./backend/routes/routes');
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use(cors({ optionSuccessStatus: 200 }));

app.use('/', routes);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
