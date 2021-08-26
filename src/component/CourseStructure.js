import { useState } from "react";
import { Link } from "react-router-dom";

function CourseStructure(props) {
  const link = "https://youtu.be/";
  const courseName = props.match.params.coursename;
  const courses = {
    reactjs: [
      { title: "react js title 1", vid: "edblCnJhvdI" },
      { title: "react js title 2", vid: "o8jEBYOu9dA" },
      { title: "react js title 3", vid: "o8jEBYOu9dA" },
    ],
    nodejs: [
      { title: "node js title 1", vid: "F-i0d67PVkE" },
      { title: "node js title 2", vid: "o8jEBYOu9dA" },
      { title: "node js title 3", vid: "o8jEBYOu9dA" },
    ],
  };

  const [vid, uid] = useState(courses[courseName][0].vid);
  const [title, utit] = useState(courses[courseName][0].title);

  const renderVideo = () => {
    return (
        <>
        <h1>{title}</h1>
      <div className="video-container">
        <iframe
          width={853}
          height={480}
          src={`//www.youtube.com/embed/${vid}?rel=0`}
          frameBorder={0}
          allowFullScreen
        />
      </div>
      </>
    );
  };
  return (
    <div>
      {renderVideo()}
      <ul className="collection">
        {
            courses[courseName].map((e, i) => {
                return <Link to="#!" key={i} className="collection-item" onClick={() => {
                    uid(e.vid)
                    utit(e.title)
                }}>{e.title}</Link>
            })
        }
      </ul>
    </div>
  );
}

export default CourseStructure;
