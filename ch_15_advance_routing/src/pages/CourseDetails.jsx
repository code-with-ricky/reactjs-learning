import { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  // provided by react router DOM to get the all params in url
  // returns object, with key names as param name
  const params = useParams();
  const [courseName] = useState(params.coursename);

  return <div>CourseDetails: {courseName}</div>;
};

export default CourseDetails;
