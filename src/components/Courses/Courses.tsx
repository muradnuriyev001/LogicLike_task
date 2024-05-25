import c from "./Courses.module.scss";
import useFetch from "../../hooks/useFetch";
import CourseItem from "./Course/CourseItem";

const Courses = ({ activeTag }) => {
  const { data, loading } = useFetch("https://logiclike.com/docs/courses.json");
  return (
    <div className={c.courses}>
      {!(data === null || loading) &&
        data
          .filter(({ tags }) => tags.includes(activeTag) || activeTag === "All")
          .map((course) => <CourseItem key={course.id} {...course} />)}
    </div>
  );
};

export default Courses;