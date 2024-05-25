import useFetch from "../../hooks/useFetch";
import c from "./Sidebar.module.scss";

interface Props {
  activeTag: string;
  setActiveTag: (arg: string) => void;
}

const Sidebar = ({ activeTag, setActiveTag }: Props) => {
  const { data } = useFetch("https://logiclike.com/docs/courses.json");

  let tags: string[] = [];

  // Check if data exists and is an array
  if (Array.isArray(data)) {
    // Flatten the array of arrays and get unique tags
    const allTags = data.map((course) => course.tags);
    tags = Array.from(new Set(allTags.flat()));
  }

  return (
    <div className={c.sidebar}>
      <div className={c.content}>
        <ul>
          <li
            className={activeTag === "All" ? c.active : ""}
            onClick={() => setActiveTag("All")}
          >
            Все темы
          </li>
          {tags.map((tag, i) => (
            <li
              className={activeTag === tag ? c.active : ""}
              key={i}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
