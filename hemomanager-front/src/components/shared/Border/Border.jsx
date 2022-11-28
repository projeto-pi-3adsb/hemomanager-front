import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { BoxBorder } from "./style";
import ReactPlayer from "react-player";

export function Border() {
  return (
    <>
      <BoxBorder>
        <ReactPlayer url="https://www.youtube.com/watch?v=5NlFrG3ZPJY" />
      </BoxBorder>
    </>
  );
}
