import { useState } from "react";

function CourseStructure(props) {
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
  const [counter, setCounter] = useState(0)

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
                return <li key={e.vid} className={counter === i ? "collection-item myitem" : "collection-item"} onClick={() => {
                    uid(e.vid)
                    utit(e.title)
                    setCounter(i)
                }}>{e.title}</li>
            })
        }
      </ul>
    </div>
  );
}

export default CourseStructure;
