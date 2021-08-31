const { multipleMongooseObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class SiteController {
  //[GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
