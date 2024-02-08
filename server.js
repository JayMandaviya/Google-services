const express = require("express");
const processRoutes = require("./routes/processRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
const port = 3000;

app.use("/process", processRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
