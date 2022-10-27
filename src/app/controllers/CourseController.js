const Course = require('../models/Course');
const { mongooseToObject} = require('../../utill/mongoose');

class CourseController{
    //[GET] /COURSE/SLUG

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
              //  res.json(course);
            })
            .catch(next);
    }
    //[GET] /COURSE/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /COURSE/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }


}

module.exports = new CourseController();

