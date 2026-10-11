import { GraduationCap } from "lucide-react";
function Education(){
    return(
        <div className="flex flex-col gap-3  bg-[#F7F5EF]" >
        <div className="py-4 px-4 border-2 border-black rounded-sm w-[50%] mt-2 ml-3 bg-[#FFFFFF] text-[#18251F]">
            <h1 className="font-bold w-[90%] max-w-md">MY BACKGROUND</h1>
            <h2 className="font-bold">Education</h2>
            <div className="flex gap-2 border-2 border-black rounded-sm">
                <GraduationCap size={49}/>
                <div className="flex flex-col gap-2 max-w-[80%]">
                    <h1>B.Tech - Computer Science</h1>
                    <h2>Galgotias University</h2>
                    <h3>2026-2030</h3>
                </div>
            </div>
            <div className="flex gap-4 grid grid-cols-1 md:grid-cols-2 mt-2">
                <div className="flex flex-col gap-2 border-2 border-black rounded-sm px-2 py-2">
                <h2 className="font-bold">Class XII</h2>
                <h3>85%</h3>
                <h2>CBSE · 2026 </h2>
            </div>
            <div className="flex flex-col gap-2 border-2 border-black rounded-sm px-2 py-2">
                <h2 className="font-bold">Class X</h2>
                <h3>87%</h3>
                <h2>CBSE · 2024 </h2>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Education;