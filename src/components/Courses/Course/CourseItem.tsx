import c from "./CourseItem.module.scss";
const Course = ({ name, image, bgColor }) => {
  return (
    <div className={c.course_item}>
      <div className={c.image} style={{ backgroundColor: bgColor }}>
        <img src={image} alt="" />
      </div>
      <div className={c.text}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Course;
