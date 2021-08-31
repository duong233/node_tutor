const Mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

Mongoose.plugin(slug);

const Schema = Mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, default: "", required: true },
    description: { type: String },
    img: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("Course", Course);
