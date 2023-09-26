import React from 'react';
import AnimatedNumbers from "react-animated-numbers";
import { HorizontalTicker } from "react-infinite-ticker";
import "./Home.css";


export default function Home() {

    const proj = [
        {
            id: 0,
            imag: "/proj1.jpg",
            name: "Onondaga Pedestrian Bridge"
        },
        {
            id: 1,
            imag: "/aq1.jpg",
            name: "Camillus Aqueduct"
        },
        {
            id: 2,
            imag: "/wpb.jpg",
            name: "Whitney Point Bridge"
        },
        {
            id: 3,
            imag: "/jgb.jpg",
            name: "John Glenn Boulevard"
        },
        {
            id: 4,
            imag: "/hoxie.jpg",
            name: "Hoxie Gorge"
        }
    ];      
    


    return (
        <div className='overflow-clip'><div className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/homebgfinal-min.png'})` }}>
                <div className="pt-[30%] md:pt-[12%] 2xl:pt-[12%] font-semibold pl-12 md:pl-32 h-screen pr-16 md:w-1/2 md:pr-0 xl:pl-52">
                    <div className="text-6xl xl:text-8xl 2xl:text-[105px] text-white font-extrabold">
                        Infrastructure Built to Last
                    </div>
                    <div className="text-2xl text-blue-200 font-semibold">Building strong foundations for over <span className="inline-block"><AnimatedNumbers includeComma animateToNumber={60} configs={[{ mass: 1, tension: 100, friction: 50 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 }]}/></span>
                    &nbsp;years</div>
                    <a href="/employment"> 
                        <button type="button" class="py-3 px-4 mt-3 bg-blue-600 shadow-lg hover:bg-blue-800 text-white w-auto transition ease-in duration-400 text-center text-xl font-bold rounded-lg">
                            Join Us
                        </button>
                    </a>
                </div>
            </div>
            <div className="relative h-[200px] bg-white w-screen overflow-visible">
                <div className="absolute left-[-10px] top-[-45px] flex bg-white h-[525px] w-[105%] md:w-[105%] justify-center pt-10 transform rotate-1">
                    <div className="absolute left-[-15px] top-[30px] grid bg-blue-700 h-full w-[105%] md:w-[105%] content-center pt-10 transform rotate-1 overflow-visible">
                        <div className="w-screen flex justify-center absolute top-[10%] text-5xl font-bold -rotate-2 text-white translate-x-3 md:translate-x-0">Projects</div>
                        <div className="w-[105%] -rotate-2 -mt-24 md:-mt-12">
                            <HorizontalTicker
                            duration={35000}
                            >
                                {proj.map(({ id, imag, name }) => (
                                    <a href="/projects" className="p-2 hover:scale-[101%] transition ease-in-out duration-500">
                                        <div className="box-wrapper box-wrapper--vertical" key={id}>
                                            <div className="box box--vertical">
                                                <div className="relative">
                                                    <img alt="" className="rounded-lg h-[240px] w-[600px]" src={imag} />
                                                    <div className="absolute bottom-[10%] left-[7%] z-10 text-3xl font-semibold text-white">{name}</div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 rounded-lg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </HorizontalTicker>
                            <div className="w-screen flex justify-center translate-x-5 md:translate-x-2">
                                <a href="/projects">
                                    <button type="button" class="py-3 px-4 mt-12 bg-blue-400 shadow-lg hover:bg-blue-600 text-white w-auto transition ease-in duration-300 text-center text-xl font-bold rounded-lg">
                                        View All Projects
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[360px] bg-[#fcfdff]'></div>
        </div>
    );
}