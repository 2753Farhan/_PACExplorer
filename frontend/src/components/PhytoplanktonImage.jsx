import { useRef, useEffect, useState } from 'react';

const PhytoplanktonImage = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Load the image and draw it on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
  }, []);

  // Function to highlight the selected color
  const highlightColor = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Loop through each pixel
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      // Apply the filter based on the selected color
      if (selectedColor === 'red' && !(red > green && red > blue)) {
        data[i] = 255;     // Red
        data[i + 1] = 255; // Green
        data[i + 2] = 255; // Blue
      } else if (selectedColor === 'green' && !(green > red && green > blue)) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      } else if (selectedColor === 'blue' && !(blue > red && blue > green)) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      }
    }

    // Update the canvas with the new image data
    ctx.putImageData(imageData, 0, 0);
  };

  // Handle the color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
    highlightColor();
  };

  return (
    <div className="flex">
      {/* Sidebar for selecting colors */}
      <div className="w-1/4 p-4">
        <h2>Select Phytoplankton Type</h2>
        <button onClick={() => handleColorChange('red')} className="block p-2 mb-2 bg-red-500 text-white">Red</button>
        <button onClick={() => handleColorChange('green')} className="block p-2 mb-2 bg-green-500 text-white">Green</button>
        <button onClick={() => handleColorChange('blue')} className="block p-2 mb-2 bg-blue-500 text-white">Blue</button>
      </div>

      {/* Canvas for the image */}
      <div className="w-3/4">
        <canvas ref={canvasRef}></canvas>
        <img ref={imageRef} src="./images/red_blue.png" alt="Phytoplankton" style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default PhytoplanktonImage;
