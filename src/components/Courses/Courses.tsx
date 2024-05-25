import c from "./Courses.module.scss";
import useFetch from "../../hooks/useFetch";
import CourseItem from "./Course/CourseItem";
import Loader from "../Loader/Loader";

const Courses = ({ activeTag }: { activeTag: string }) => {
  const { data, loading } = useFetch("https://logiclike.com/docs/courses.json");
  return (
    <div className={c.courses}>
      {data === null || loading? (
        <Loader />
      ) : (
        <div className={c.courses_container}>
          {data
            .filter(
              ({ tags }) => tags.includes(activeTag) || activeTag === "All"
            )
            .map((course) => (
              <CourseItem key={course.id} {...course} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
