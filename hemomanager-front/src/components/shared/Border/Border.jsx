import React from "react";

import "react-html5video/dist/styles.css";
import { BoxBorder } from "./style";
import ReactPlayer from "react-player";

export function Border() {
  return (
    <>
      <BoxBorder>
        <ReactPlayer loop url="https://www.youtube.com/watch?v=5NlFrG3ZPJY" />
      </BoxBorder>
    </>
  );
}
