import React from "react";

export default function About() {
    return(
        <div className="h-screen px-[18.5%] pt-[22%] md:pt-[10%] xl:pt-[8%] bg-cover bg-[#ffffff] bg-fixed pb-[10%]">
            <div className="text-6xl font-bold mt-7 mb-10 text-[#2f4e80]">About</div>
            <div className="h-max">
                <div className="md:flex space-y-5 md:space-y-0 md:space-x-20">
                    <div className="w-full md:w-[55%]">
                        <div className="h-[300px] md:h-[450px] w-full rounded-lg bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/wpb.jpg'})`}}>
                        </div>
                    </div>
                    <div className="text-l w-full md:w-[45%] font-semibold text-[#2b4978]">
                        <p className="mb-7">Vector Construction, co-founded by Richard F. Anderson in 1963, is a family owned company specializing in heavy highway construction.</p>
                        <p className="mb-7">Vector’s headquarters and shop are located in Cicero, New York and performs work throughout New York State. Vector focuses on bridge rehabilitation and replacement. Project contracts generally range from 100 thousand to 25 million dollars.</p>
                        <p className="mb-7">With over 100 years of combined experience in office management and field supervision, and a large inventory of equipment and material resources, Vector is able to meet client’s satisfaction through project execution and delivery. </p>
                        <p>Vector is an Equal Opportunity/Affirmative Action employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, national origin, disability, or protected Veteran status.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}