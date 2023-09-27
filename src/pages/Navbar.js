import React, { useState, useEffect } from 'react';
import "./nav.css";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [onScroll, setOnScroll] = useState(false);

    useEffect(() => {
        // Add an event listener to the window object
        window.addEventListener('scroll', handleScroll);
        
        // Remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures that the effect only runs once on mount

    function handleScroll() {
        if (window.scrollY > 0) {
            setOnScroll(true);
        } else {
            setOnScroll(false);
        }
    }

    return(
        <div className="w-screen fixed top-0 z-10">  
            <nav className={`${onScroll ? '':'transition ease-in-out duration-500'} bg-[#ffffff] border border-b`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="/">
                                <img className={`shrink w-25 h-16 sm:w-15 h-15 ${onScroll ? 'bf':'af'}`} src="/logo.png" alt="Workflow" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-blue-900 rounded-lg outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12"
                                            viewBox="0 0 21 21"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center md:block md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center my-5 pb-5 md:pb-0 md:my-0 space-y-5 md:flex md:space-x-1 lg:space-x-2 md:space-y-0">
                                <li className="text-xl text-[#2c4096] hover:text-[#24336f] transition ease-in-out duration-500 p-2 h-full rounded-lg font-semibold">
                                    <a href="/projects">Projects</a>
                                </li>
                                <li className="text-xl text-[#2c4096] hover:text-[#24336f] transition ease-in-out duration-500 p-2 rounded-lg font-semibold">
                                    <a href="/services">Services</a>
                                </li>
                                <li className="text-xl text-[#2c4096] hover:text-[#24336f] transition ease-in-out duration-500 p-2 rounded-lg font-semibold">
                                    <a href="/about">About</a>
                                </li>
                                <li className="text-xl text-[#2c4096] hover:text-[#24336f] transition ease-in-out duration-500 p-2 rounded-lg font-semibold">
                                    <a href="/employment">Employment</a>
                                </li>
                                <li className="text-xl text-[#2c4096] hover:text-[#24336f] transition ease-in-out duration-500 p-2 rounded-lg font-semibold">
                                    <a href="/contact">Contact</a>
                                </li>
                                <a href="/login">  
                                    <button className="text-xl transition ease-in-out duration-500 hover:bg-blue-800 mx-2 mt-4 px-4 py-2 md:mt-0 rounded-lg font-semibold bg-[#234d91] text-white">
                                        Login
                                    </button>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}