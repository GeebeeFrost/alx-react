import PropTypes from "prop-types";

const CourseShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  credit: PropTypes.number,
};

const CoursePropType = PropTypes.shape(CourseShape);

export default CoursePropType;
