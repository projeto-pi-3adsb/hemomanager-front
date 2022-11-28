import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css"
import { BoxBorder } from "./style";
import videoUrl from "../../../../src/video/video.mp4";

export function Border() {
  return (
    <>
      <BoxBorder>
        <Video autoPlay loop>
          <source src={videoUrl} type="video/webm" />
        </Video>
      </BoxBorder>
    </>
  );
}
