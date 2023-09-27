import React, { useState } from "react";
import Viewer from "react-viewer";

export default function Services() {
  const services = [
    {
      title: "Bridge Demo",
      imageSrc: `${process.env.PUBLIC_URL}/bdemo.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Concrete Construction and Repair",
      imageSrc: `${process.env.PUBLIC_URL}/cretez.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Culverts",
      imageSrc: `${process.env.PUBLIC_URL}/culv.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Excavation and Backfill",
      imageSrc: `${process.env.PUBLIC_URL}/ev.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Specialized Deck Overlays",
      imageSrc: `${process.env.PUBLIC_URL}/spd.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Steel Erection",
      imageSrc: `${process.env.PUBLIC_URL}/se.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Steel Repair",
      imageSrc: `${process.env.PUBLIC_URL}/sr.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Storm Drains",
      imageSrc: `${process.env.PUBLIC_URL}/sd.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Structural Lifting",
      imageSrc: `${process.env.PUBLIC_URL}/sl.jpg`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more services here
  ];

  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setViewerIsOpen(true);
  };

  const customLightboxStyles = {
    zIndex: 10000, // Set the zIndex for the lightbox
  };

  return (
    <div className="h-min pb-[25%] lg:pb-[10%] px-[12%] pt-[22%] md:pt-[10%] xl:pt-[8%] bg-cover bg-white bg-fixed">
      <div className="text-5xl font-bold my-7 text-[#2f4e80]">Services</div>
      <div className="md:flex justify-start">
        <div className="w-full grid md:grid-cols-3 gap-y-24 gap-x-8 md:pb-10 lg:pb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[103%] transform"
              style={{ backgroundImage: `url(${service.imageSrc})` }}
              onClick={() => openViewer(index)} // Open the viewer when the image is clicked
            >
              <div
                className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#0c2959]"
              >
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewerIsOpen && (
        <Viewer
          visible={viewerIsOpen}
          onClose={() => setViewerIsOpen(false)}
          images={services.map((service) => ({
            src: service.imageSrc,
            alt: service.title,
          }))}
          activeIndex={currentImageIndex}
          customStyles={customLightboxStyles} // Apply custom lightbox styles
          noNavbar
          drag={false} // Disable drag to move images
        />
      )}
    </div>
  );
}
