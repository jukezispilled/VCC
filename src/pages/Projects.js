import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function Projects() {
    return(
        <div className="h-min px-[18.5%] pt-[22%] md:pt-[10%] xl:pt-[8%] bg-cover bg-fixed pb-[14%]">
            <div className="text-6xl font-bold my-7 text-[#2f4e80]">Projects</div>
            <div className="h-min rounded-xl xl:bg-blue-100 xl:px-10 xl:py-1">
                <div className="my-8">   
                    <div className="py-5 grid space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Onondaga Pedestrian Bridge</div>
                            <div className="text-[#2b4978] font-medium">The Onondaga Pedestrian Bridge is a bridge that spans across Onondaga Creek in Syracuse, New York, USA. The bridge is designed to provide a safe pedestrian and bike path between the Onondaga Creekwalk and the Creekwalk Extension.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                        <Carousel
                            className="rounded-xl h-[250px] md:h-[300px] md:w-[52%]"
                            autoplay={true}
                            loop={true}
                            interval={1000}
                            prevArrow={({ handlePrev }) => {}}
                            nextArrow={({ handleNext }) => {}}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                    <span
                                      key={i}
                                      className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "bg-white w-10" : "bg-white/60 w-5"
                                      }`}
                                      onClick={() => setActiveIndex(i)}
                                    />
                                  ))}
                                </div>
                            )}
                        >
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                        </Carousel>
                    </div>
                </div>
                <div className="my-10">   
                    <div className="py-5 grid space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <Carousel
                            className="rounded-xl h-[250px] md:h-[300px] md:w-[52%]"
                            autoplay={true}
                            loop={true}
                            interval={900}
                            prevArrow={({ handlePrev }) => {}}
                            nextArrow={({ handleNext }) => {}}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                    <span
                                      key={i}
                                      className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "bg-white w-10" : "bg-white/60 w-5"
                                      }`}
                                      onClick={() => setActiveIndex(i)}
                                    />
                                  ))}
                                </div>
                            )}
                        >
                            <img src="/aq1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                        </Carousel>
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Camillus Aqueduct</div>
                            <div className="text-[#2b4978] font-medium">The Camillus Aqueduct was a crucial part of the Erie Canal system, which was built in the early 19th century to connect the Hudson River with the Great Lakes. The original aqueduct was constructed in 1842 and served as a vital link in the transportation of goods and people across New York State.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="my-10">   
                    <div className="py-5 grid space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Whitney Point</div>
                            <div className="text-[#2b4978] font-medium">A temporary bridge installation and bridge replacement of Route 26 / 79 over Tioughnioga River.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                        <Carousel
                            className="rounded-xl h-[250px] md:h-[300px] md:w-[52%]"
                            autoplay={true}
                            loop={true}
                            interval={1000}
                            prevArrow={({ handlePrev }) => {}}
                            nextArrow={({ handleNext }) => {}}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                    <span
                                      key={i}
                                      className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "bg-white w-10" : "bg-white/60 w-5"
                                      }`}
                                      onClick={() => setActiveIndex(i)}
                                    />
                                  ))}
                                </div>
                            )}
                        >
                            <img src="/wpb.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                        </Carousel>
                    </div>
                </div>
                <div className="my-10">   
                    <div className="py-5 grid space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <Carousel
                            className="rounded-xl h-[250px] md:h-[300px] md:w-[52%]"
                            autoplay={true}
                            loop={true}
                            interval={900}
                            prevArrow={({ handlePrev }) => {}}
                            nextArrow={({ handleNext }) => {}}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                    <span
                                      key={i}
                                      className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "bg-white w-10" : "bg-white/60 w-5"
                                      }`}
                                      onClick={() => setActiveIndex(i)}
                                    />
                                  ))}
                                </div>
                            )}
                        >
                            <img src="/jgb.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                        </Carousel>
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">John Glenn Boulevard</div>
                            <div className="text-[#2b4978] font-medium">A bridge rehabilitation of Eastbound and Westbound structures over Onondaga lake outlet.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="my-10">   
                    <div className="py-5 grid space-y-10 md:flex md:space-x-12 md:space-y-0 h-min">
                        <div className="md:w-[48%]">
                            <div className="text-4xl font-bold mb-4 text-[#25406b]">Hoxie Gorge</div>
                            <div className="text-[#2b4978] font-medium">A replacement of I81 Bridges over Hoxie Gorge.</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Location:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Services:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Owner:</div>
                            <div className="pt-1 text-lg font-bold text-[#375688]">Cost:</div>
                        </div>
                        <Carousel
                            className="rounded-xl h-[250px] md:h-[300px] md:w-[52%]"
                            autoplay={true}
                            loop={true}
                            interval={1000}
                            prevArrow={({ handlePrev }) => {}}
                            nextArrow={({ handleNext }) => {}}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                  {new Array(length).fill("").map((_, i) => (
                                    <span
                                      key={i}
                                      className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "bg-white w-10" : "bg-white/60 w-5"
                                      }`}
                                      onClick={() => setActiveIndex(i)}
                                    />
                                  ))}
                                </div>
                            )}
                        >
                            <img src="/hoxie.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                            <img src="/proj1.jpg" className="bg-cover h-full w-full rounded-xl"></img>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}