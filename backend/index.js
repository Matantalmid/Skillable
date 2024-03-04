const {app} = require("./app")
const mongoose=require("mongoose")
// const {config}=require("./config")
// const {MONGO_URL}=config

mongoose
  .connect("mongodb+srv://ofekmajardev:XL8B5YSnn18B5Ya3@cluster0.ws5izty.mongodb.net/Skillable?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

 
const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
