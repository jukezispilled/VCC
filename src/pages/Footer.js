import React from "react";

export default function Footer() {
    return(
        <footer className="h-min bg-blue-800">
            <div className="p-[4%] md:p-16 md:ml-[10%] grid content-center space-y-5 md:flex justify-items-center md:justify-items-start md:space-y-0 md:space-x-7 xl:space-x-[7%]">
                <div className="text-white text-l font-medium md:space-y-5">
                    <div className="flex flex-row md:space-x-7">
                        <div className="pb-4 flex flex-col space-y-0">
                            <p>Vector Construction Corporation</p>
                            <p>6364 Island Road</p>
                            <p>Cicero, NY 13039</p>
                        </div>
                        <div className="pb-4 pl-4 flex flex-col space-y-0">
                            <p>phone: 315-699-9277</p>
                            <p>fax: 315-699-3906</p>
                            <p>email: admin@vectorcorp.net</p>
                        </div>
                    </div>
                    <div className="flex flex-col font-extrabold">
                        <p>© 2023 Vector Construction Corporation. All rights reserved.</p>
                    </div>
                </div>
                <div className="text-white text-l font-medium flex flex-row space-x-4 md:space-x-0 md:flex md:flex-col md:space-y-4 -ml-4 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4">
                    <div>
                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="projects">Projects</a></div>
                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="services">Services</a></div>
                    </div>
                    <div>
                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="about">About</a></div>
                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="employment">Employment</a></div>
                    </div>
                    <div>

                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="contact">Contact</a></div>
                        <div><a className="hover:text-blue-950 transition ease-in duration-100 underline" href="login">Login</a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}