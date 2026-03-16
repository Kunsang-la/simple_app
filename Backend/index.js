const express = require('express');
const cors = require('cors');
const EVENTS = require("./data/event.js");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/getEvents', (req, res) => {
    return res.json({
    status: "success",
    statusCode: 200,
    data: EVENTS,
  });;
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});