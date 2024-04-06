import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

export const Github = () => {
  return (
    <div className="mb-10 block justify-center items-center text-center text-white w-full">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
        <center>
        <GitHubCalendar
          username="nealde"
          blockSize={15}
          blockMargin={5}
          // color={"#c084f5"}
          fontSize={16}
          // padding={20}
          // className="justify-center"
        />
      </center>
    </div>
  );
}

// export default Github;
