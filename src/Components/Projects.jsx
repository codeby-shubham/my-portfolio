import { Clapperboard,CloudSun,ArrowLeftRight,Hand } from "lucide-react";
function Projects(){

    return(
        <div className="flex flex-col gap-2 bg-[#F7F5EF">
        <div className="mt-2 px-4 py-4 border-2 border-black rounded-sm max-w-[50%] ml-3 text-[18251F]">
            <h1>WHAT I'VE BUILT</h1>
            <h2 className="font-bold">Featured Projects</h2>
            <h3>A few things I've built while learning and experiencing</h3>
            <div className="flex gap-2 grid grid-col-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm max-w-[90%] px-2 py-2">
                    <Clapperboard/>
                    <h2 className="font-bold">Movie Review App</h2>
                    <h3>Browse movies and reviews.</h3>
                </div>
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm max-w-[90%] px-2 py-2">
                    <ArrowLeftRight/>
                    <h2 className="font-bold">Currency Converter</h2>
                    <h3>Get exchange-rate data and country flags.</h3>
                </div>
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm max-w-[90%] px-2 py-2">
                    <CloudSun/>
                    <h2 className="font-bold">Weather App</h2>
                    <h3>Check weather conditions using a weather API.</h3>
                    {/* <div className="flex gap-2">
                    <span className="rounded-full border border-blue-900 bg-blue-950 px-4 py-2 text-sm font-small text-blue-400 max-w-18">HTML</span>
                    <span className="rounded-full border border-blue-900 bg-blue-950 px-4 py-2 text-sm font-small text-blue-400 max-w-18">JS</span>
                    </div> */}
                </div>
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm max-w-[90%] px-2 py-2">
                    <Hand/>
                    <h2 className="font-bold">Rock Paper Scissors</h2>
                    <h3>Play against computer in this classic game. Simple , fun and interactive</h3>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Projects;