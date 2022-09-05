const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://puja:puja.shar@cluster0.gtf6p.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error("Could not connect to mongo db", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema); //creates cpurse class
const course = new Course({
  name: "Node js Course",
  author: "Mosh",
  tags: ["node", "backend"],
  isPublished: true,
});
