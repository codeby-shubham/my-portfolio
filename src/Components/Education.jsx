import { GraduationCap } from "lucide-react";
import EduCard from "./Cards/EduCard";
function Education(){
    return(
        <div className="flex flex-col gap-3  bg-[#0B1220]" >
        <div className="py-4 px-4 border-2 border-black rounded-sm max-w-full mt-2 ml-3 text-white">
            <h1 className="font-bold w-[90%] max-w-md">MY BACKGROUND</h1>
            <h2 className="font-bold">Education</h2>
            <div className="flex gap-2 border-2 border-black rounded-sm">
                <GraduationCap size={49}/>
                <div className="flex flex-col gap-2 max-w-[80%]">
                   <EduCard course="B.Tech in Computer Science" institution="Galgotias University" year="2022-2026"/>
                </div>
            </div>
            <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 mt-2">
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm px-2 py-2">
                <div className="flex flex-col gap-2 max-w-[80%]">
                   <EduCard course="Class X" institution="87%" year="2024"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-2 border-black rounded-sm px-2 py-2">
                <div className="flex flex-col gap-2 max-w-[80%]">
                   <EduCard course="Class XII" institution="85%" year="2026"/>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Education;