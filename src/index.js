const expres = require("express");
const apiRoute = require("./routes/routes");
const app = expres();
const PORT = process.env.PORT || 3000;
app.use(expres.json());
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});