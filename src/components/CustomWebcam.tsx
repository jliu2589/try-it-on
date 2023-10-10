'use client';

import Webcam from 'react-webcam';
import { useRef, useState } from 'react'; // import useRef

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference

  const [webcam, setWebcam] = useState(false);

  const toggleCamera = () => {
    setWebcam(!webcam);
  };

  return (
    <div className='flex flex-col'>
      <div className='mx-auto'>
        <button onClick={toggleCamera} className=' bg-blue-600 p-2 rounded-md'>
          Camera
        </button>
      </div>

      {webcam ? (
        <div className='mx-auto py-10'>
          <Webcam height={600} width={600} ref={webcamRef} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CustomWebcam;
