export default function About() {
    return (
      <div className="h-min px-[10%] lg:px-[15%] pt-[22%] md:pt-[10%] xl:pt-[8%] bg-cover bg-white bg-fixed pb-[10%]">
        <div className="text-5xl font-bold mt-7 mb-7 md:mb-9 text-[#2f4e80]">About</div>
        <div className="h-max">
          <div className="md:flex space-y-5 md:space-y-0 md:space-x-20">
            <div className="relative w-full md:w-[55%]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-zinc-800 opacity-30 rounded-lg z-10"></div>
              <div className="h-[300px] md:h-[450px] w-full rounded-lg bg-cover relative" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/wpb.jpg'})` }}>
                {/* Image */}
              </div>
            </div>
            <div className="text-l w-full md:w-[45%] font-semibold text-[#2b4978]">
              <p className="mb-7">Vector Construction, co-founded by Richard F. Anderson in 1963, is a family-owned company specializing in heavy highway construction.</p>
              <p className="mb-7">Vector’s headquarters and shop are located in Cicero, New York, and perform work throughout New York State. Vector focuses on bridge rehabilitation and replacement. Project contracts generally range from 100 thousand to 25 million dollars.</p>
              <p className="mb-7">With over 100 years of combined experience in office management and field supervision, and a large inventory of equipment and material resources, Vector is able to meet client’s satisfaction through project execution and delivery.</p>
              <div className="border-t border-gray-300 my-4"></div>
              <p className="font-extrabold">Vector is an Equal Opportunity/Affirmative Action employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, national origin, disability, or protected Veteran status.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  