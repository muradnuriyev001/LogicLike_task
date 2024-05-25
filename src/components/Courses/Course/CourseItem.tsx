import { Course } from "../../../interfaces/interface";
import c from "./CourseItem.module.scss";

type Props = Omit<Course, "id" & "tags">;

const CourseItem = ({ name, image, bgColor }: Props) => {
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

export default CourseItem;
