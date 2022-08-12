const express = require("express");
const app = express();

app.use(express.json());


const axios = require('axios');
app.post("/", async(req,res) => {
  try {
  var body = req.body;
  const data = (await axios(body)).data;
  res.json(data);
  }catch(e) {
  res.json({error: `${e}`});
  }
})

app.get('*', (req,res) => res.redirect('https://github.com/codingstudios/Fetch-Relay'))

app.listen(3000);
