const express = require('express')
const basicAuth = require('express-basic-auth');

const app = express();

app.use(basicAuth({
  users: { 'admin': process.env.ADMIN_PW }
}))

app.get('/', (req, res) => {
  res.send('<h2>Hi there!!</h2>');
});

app.listen(80);
