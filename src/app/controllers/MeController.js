const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseObject,
} = require("../../util/mongoose");

class MeController {
  // GET /me/stored/courses
  storeCourse(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("../../resources/views/me/stored-courses", {
          courses: multipleMongooseObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
