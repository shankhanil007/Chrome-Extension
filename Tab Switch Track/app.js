const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    res.json("success");
  } catch (err) {}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
