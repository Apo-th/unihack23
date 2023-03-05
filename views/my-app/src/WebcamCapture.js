import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({videoConstraints}) => (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot()
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  );

  export default WebcamCapture;