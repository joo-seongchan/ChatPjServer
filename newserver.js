const express = require(`express`);
const routes = require(`./routes.js`);

const app = express();
const port = process.env.PORT || 5000;

app.use(routes);

app.listen(port, () => {
  console.log(`####Express listening on port####`, port);
});
