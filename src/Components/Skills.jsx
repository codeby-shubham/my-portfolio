import { Code2,Palette,FileCode2,Atom,Wind,MonitorSmartphone,Coffee,Code,Terminal,Server,Webhook,Database } from "lucide-react";
import Ik from "./Cards/Ik";
import { SkillRendr } from "./Cards/SkillRendr";
function Skills(){
    return(
        <div className="flex flex-col gap-2  w-full   bg-[#0B1220] text-white">
            <div className="px-4 py-4 border-2 ml-3 border-black rounded-sm max-w-full mt-5">
            <h1>WHAT I WORK WITH</h1>
            <h2 className="font-bold"> Skills & Technologies</h2>
            <h3>Tools and Technologies I use to build projects and keep learning.</h3>
            <div className="gap-4 grid grid-col-1 md:grid-cols-2">
                {SkillRendr.map((skill) => (
                    <Ik key={skill.id} icon={skill.icon} skill={skill.skill}/>
                ))}
                </div>
                </div>
            </div>
        
    )
}
export default Skills;