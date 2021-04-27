import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type MediaProps = {
  audio: boolean;
  video: {
    width: number;
    height: number;
  };
};

const Main: React.FC<MediaProps> = ({ audio, video }) => {
  return (
    <>
      <h1>ここにメインページを書く</h1>
      <video id="video" width="640" height="480" autoPlay></video>
      <Link href="/">
        <a>Back</a>
      </Link>
    </>
  );
};

export default Main;
