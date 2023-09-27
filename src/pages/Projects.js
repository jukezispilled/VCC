import React from "react";
import Swiper0 from "./Swiper0.js";

export default function Projects() {
    
const eandb = <div className="py-1 px-3 m-2 bg-blue-800 text-white w-min rounded-full whitespace-nowrap">Excavation and Backfill</div>
const candr = <div className="py-1 px-3 m-2 bg-blue-800 text-white w-min rounded-full whitespace-nowrap">Concrete Construction and Repair</div>
const bd = <div className="py-1 px-3 m-2 bg-blue-800 text-white w-min rounded-full whitespace-nowrap">Bridge Demolition</div>
const sd = <div className="py-1 px-3 m-2 bg-blue-800 text-white w-min rounded-full whitespace-nowrap">Storm Drains</div>
const se = <div className="py-1 px-3 m-2 bg-blue-800 text-white w-min rounded-full whitespace-nowrap">Steel Erection</div>

const images1 = [
    { src: process.env.PUBLIC_URL + '/ped0.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/ped.jpg', alt: 'Slide 2' },
    { src: process.env.PUBLIC_URL + '/ped1.jpg', alt: 'Slide 3' },
    // Add more images as needed
];

const images2 = [
    { src: process.env.PUBLIC_URL + '/aq1.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/camillus-aqueduct-01.jpg', alt: 'Slide 2' },
    { src: process.env.PUBLIC_URL + '/camillus-aqueduct-02.jpg', alt: 'Slide 3' },
    { src: process.env.PUBLIC_URL + '/camillus-aqueduct-04.jpg', alt: 'Slide 4' },
    { src: process.env.PUBLIC_URL + '/camillus-aqueduct-05.jpg', alt: 'Slide 5' },
    { src: process.env.PUBLIC_URL + '/camillus-aqueduct-08.jpg', alt: 'Slide 6' },
    // Add more images as needed
];

const images3 = [
    { src: process.env.PUBLIC_URL + '/whitney_point_bridge_10.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/whitney-point-16.jpg', alt: 'Slide 2' },
    { src: process.env.PUBLIC_URL + '/whitney-point-17.jpg', alt: 'Slide 3' },
    { src: process.env.PUBLIC_URL + '/whitney_point_bridge_01.jpg', alt: 'Slide 4' },
    { src: process.env.PUBLIC_URL + '/whitney_point_bridge_07.jpg', alt: 'Slide 5' },
    { src: process.env.PUBLIC_URL + '/whitney_point_bridge_09.jpg', alt: 'Slide 6' },
    { src: process.env.PUBLIC_URL + '/whitney_point_bridge_15.jpg', alt: 'Slide 6' },
    // Add more images as needed
];

const images4 = [
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_02.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_09.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_12.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_08.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_07.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_04.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/john_glenn_boulevard_10.jpg', alt: 'Slide 1' },
    // Add more images as needed
];

const images5 = [
    { src: process.env.PUBLIC_URL + '/hoxie-gorge-bridge-04.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/hoxie-gorge-bridge-03.jpg', alt: 'Slide 1' },
    { src: process.env.PUBLIC_URL + '/hoxie-gorge-bridge-02_background_image.jpg', alt: 'Slide 1' },
    // Add more images as needed
];

    return(
        <div className="h-min px-[12%] pt-[22%] md:pt-[10%] xl:pt-[8%] 2xl:px-[16.5%] bg-cover bg-fixed pb-[14%] bg-white">
            <div className="text-5xl font-bold mt-7 mb-3 text-[#2f4e80] xl:pb-5">Projects</div>
            <div className="h-min rounded-xl xl:bg-blue-100 xl:px-10 xl:py-1">
                <div className="mb-8">   
                    <div className="pt-5 space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Onondaga Pedestrian Bridge</div>
                            <div className="text-[#2b4978] font-medium">The Onondaga Pedestrian Bridge is a bridge that spans across Onondaga Creek in Syracuse, New York, USA. The bridge is designed to provide a safe pedestrian and bike path between the Onondaga Creekwalk and the Creekwalk Extension.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location: Onondaga, NY</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                        <div className="md:w-[52%]">
                            <Swiper0 images={images1} />
                        </div>
                    </div>
                </div>
                <div className="my-6">   
                    <div className="pt-5 space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[52%]">
                            <Swiper0 images={images2} />
                        </div>
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Camillus Aqueduct</div>
                            <div className="text-[#2b4978] font-medium">The Camillus Aqueduct was a crucial part of the Erie Canal system, which was built in the early 19th century to connect the Hudson River with the Great Lakes. The original aqueduct was constructed in 1842 and served as a vital link in the transportation of goods and people across New York State.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location: <span className="font-medium">Camillus, NY</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services: {eandb}{candr}</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner: <span className="font-medium">Town of Camillus</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost: <span className="font-medium">$2 Million</span></div>
                        </div>
                    </div>
                </div>
                <div className="my-6">   
                    <div className="pt-5 space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Whitney Point</div>
                            <div className="text-[#2b4978] font-medium">A temporary bridge installation and bridge replacement of Route 26 / 79 over Tioughnioga River.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location: <span className="font-medium">Whitney Point, NY</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services: {eandb}{bd}{candr}{sd}</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner: <span className="font-medium">NYSDOT Reg 9</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost: <span className="font-medium">$12.5 Million</span></div>
                        </div>
                        <div className="md:w-[52%]">
                            <Swiper0 images={images3} />
                        </div>
                    </div>
                </div>
                <div className="my-6">   
                    <div className="pt-5 space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[52%]">
                            <Swiper0 images={images4} />
                        </div>
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">John Glenn Boulevard</div>
                            <div className="text-[#2b4978] font-medium">A bridge rehabilitation of Eastbound and Westbound structures over Onondaga lake outlet.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location: <span className="font-medium">Liverpool, NY</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services: {eandb}{bd}{candr}{sd}</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner: <span className="font-medium">Onondaga County</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost: <span className="font-medium">$4.5 Million</span></div>
                        </div>
                    </div>
                </div>
                <div className="my-6">   
                    <div className="py-5 space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Hoxie Gorge</div>
                            <div className="text-[#2b4978] font-medium">A replacement of I81 Bridges over Hoxie Gorge.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location: <span className="font-medium">Cortland, NY</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services: {eandb}{bd}{candr}{se}</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner: <span className="font-medium">NYSDOT</span></div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost: <span className="font-medium">$15 Million</span></div>
                        </div>
                        <div className="md:w-[52%]">
                            <Swiper0 images={images5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}