import React from "react";
import { GiBlackBook } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, p } = props.item;
  return (
    <div className="single_course-item">
      <div className="course_img">
        <img src={imgUrl} alt="img" className="w-100" />
      </div>
      <div className="course_details">
        <h5 className="course_title mb-4">{title}</h5>
        <div className="d-flex justify-content-between align-items-center gap-1">
          {/* <p className="lesson d-flex align-items-center gap-1">
            <GiBlackBook style={{ color: "#44a1db", fontSize: "0.9rem" }} />
            {lesson}
          </p>

          <p className="students d-flex align-items-center gap-1">
            <BsPeople style={{ color: "#44a1db", fontSize: "0.9rem" }} />
            {students}K
          </p> */}
          <p style={{ color: "#596b65" }}>{p}</p>
        </div>

        {/* <div className="d-flex justify-content-between align-items-center gap-1">
          <p>
            
          </p> 
        </div>*/}
      </div>
    </div>
  );
};

export default CourseCard;
