import React, { useState } from "react";

function ImageGallery() {
  const [images, setImages] = useState([
    "./123.jpg",
    "./image.png",
    "./image.png",
    "./image.png",
  ]);

  const visibleCount = 3;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - visibleCount) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // 🆕 Add Image Handler
  const handleAddImage = () => {
    // You can replace this with a file picker or different image path logic
    const newImage = "./image.png";
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <div className="grid grid-cols-14 container py-3 px-1 w-full gap-2">
      {/* Left Sidebar */}
      <div className="flex flex-col justify-between items-center p-1">
        <img src="./questionmark.png" width="24" height="24" alt="" />
        <img src="./rectangles.png" width="24" height="31" alt="" />
        <div></div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col gap-2 col-span-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="px-[39px] py-[16px] rounded-2xl text-[20px] bg-black text-white">
            Gallery
          </div>

          <div className="flex justify-between gap-10">
            {/* 🆕 Add Image Button */}
            <div
              className="add-images-button flex items-center justify-center px-6 py-3 cursor-pointer bg-[#28292f] text-white rounded-xl hover:bg-[#383a40] transition"
              onClick={handleAddImage}
            >
              + Add Image
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className={index === 0 ? "opacity-50 cursor-not-allowed" : ""}
                id="nextbuttons"
              >
                <img src="./left-icon.png" alt="prev" />
              </button>

              <button
                onClick={handleNext}
                disabled={index >= images.length - visibleCount}
                className={
                  index >= images.length - visibleCount
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
                id="nextbuttons"
              >
                <img src="./right-icon.png" alt="next" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Row */}
        <div className="overflow-x-hidden rounded-xl h-52 relative flex items-end">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
              width: `${(images.length * 100) / visibleCount}%`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="p-2"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <div className="bg-[#1f1f1f] rounded-xl overflow-visible shadow-md h-40 flex items-center justify-center group transition-transform duration-500 ease-in-out hover:-rotate-2 hover:scale-108 hover:-translate-y-6">
                  <img
                    src={src}
                    alt={`image-${i}`}
                    className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-1"></div>
    </div>
  );
}

export default ImageGallery;
