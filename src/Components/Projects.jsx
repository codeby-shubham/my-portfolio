import { Clapperboard,CloudSun,ArrowLeftRight,Hand } from "lucide-react";
import { MovieCard } from "./Cards/MovieCard";
import {MovieRender} from "./Cards/MovieRender";

function Projects(){

    return(
        <div className="flex flex-col gap-2 bg-[#0B1220]  text-white">
        <div className="mt-2 px-4 py-4 border-2 border-black rounded-sm max-w-full ml-3 text-[18251F]">
            <h1>WHAT I'VE BUILT</h1>
            <h2 className="font-bold">Featured Projects</h2>
            <h3>A few things I've built while learning and experiencing</h3>
            <div className=" gap-2 grid grid-col-1 md:grid-cols-2">
                {MovieRender.map((movie) => (
                    <MovieCard key={movie.id} icon={movie.icon} title={movie.title} description={movie.description} link={movie.link} />
                ))}
            </div>
        </div>
    </div>
    // </div>
        // </div>
    )
}
export default Projects;