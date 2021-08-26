import { useEffect, useState } from "react";

function CourseStructure(props) {
  const courseName = props.match.params.coursename;
  const [courses, setCourses] = useState([]);
  const [vid, uid] = useState("");
  const [title, utit] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let playlistId = "";
    if (courseName === "reactjs") {
      playlistId = "PLZQbl9Jhl-VDeCuNNp7C2SR1lFsIjQRQo";
    } else {
      playlistId = "PLCZlgfAG0GXDsbx5eHX0dFzF2C35THONn";
    }
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=${playlistId}&key=AIzaSyCVZ4rPoObY5zIiG3PyBIBT2M7t5V2vBqs`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("nyari data", data);
        const result = data.items.map((item) => {
          return {
            title: item.snippet.title,
            vid: item.contentDetails.videoId,
          };
        });
        setCourses(result);
        uid(result[0].vid);
        utit(result[0].title);
      });
  }, [courseName]);

  const renderVideo = () => {
    return (
      <>
        <h1>{title}</h1>
        <div className="video-container">
          <iframe
            title={counter}
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
    <>
      {courses.length > 0 ? (
        <div>
          {renderVideo()}
          <ul className="collection">
            {courses.map((e, i) => {
              return (
                <li
                  key={e.vid}
                  className={
                    counter === i ? "collection-item myitem" : "collection-item"
                  }
                  onClick={() => {
                    uid(e.vid);
                    utit(e.title);
                    setCounter(i);
                  }}
                >
                  {e.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default CourseStructure;
