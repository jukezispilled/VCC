import React from "react";

export default function Footer() {
    return(
        <footer className="h-min bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/foota6.png'})` }}>
            <div className="p-[5%] md:p-16 ml-[10%] grid content-center space-y-5 md:flex md:justify-items-start md:space-y-0 md:space-x-[15%]">
                <div className="text-white text-l font-medium">
                    <div className="pb-4 flex flex-col space-y-0">
                        <p>Vector Construction Corporation</p>
                        <p>6364 Island Road</p>
                        <p>Cicero, NY 13039</p>
                    </div>
                    <div className="pb-4 flex flex-col space-y-0">
                        <p>phone: 315-699-9277</p>
                        <p>fax: 315-699-3906</p>
                        <p>email: admin@vectorcorp.net</p>
                    </div>
                    <div className="flex flex-col space-y-0 font-bold">
                        <p>© 2023 Vector Construction Corporation. All rights reserved.</p>
                    </div>
                </div>
                <div className="text-white text-l underline font-medium">
                    <a href="login">Login</a>
                </div>
            </div>
        </footer>
    )
}