import React from "react-dom";
import "./mobile.css";
import { v4 as uuidv4 } from "uuid";
const Mobile = () => {
  let data = ["Android", "BlackBerry", "iphone", "Windows Phone"];
  let mdata = ["Samsung", "HTC", "iphone", "Micromax"];
  return (
    <div className="main">
      <h3>Mobile Operating System</h3>
      <ul>
        {data.map((data) => (
          <li key={uuidv4()}>{data}</li>
        ))}
      </ul>
      <h3>Mobile Manufacturers</h3>
      <ul>
        {mdata.map((data) => (
          <li key={uuidv4()}>{data}</li>
        ))}
      </ul>
    </div>
  );
};
export default Mobile;
