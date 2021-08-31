const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // GET /courses/
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // GET /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // POST /courses/create
  store(req, res, next) {
    const formdata = req.body;
    // res.json(req.body);

    const course = new Course(formdata);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  // GET /courses/:d/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  
}

module.exports = new CourseController();
