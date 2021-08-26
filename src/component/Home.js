import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Link to="/reactjs">React JS Course</Link>
      <Link to="/nodejs">Node JS Course</Link>
    </div>
  );
}

export default Home;
