
import { Code2,Brain } from "lucide-react";
import AboutCard from "./Cards/AboutCard";
function About(){
    return(
        <div className="flex flex-col md:flex-row md:justify-centre gap-3 px-3 py-2 bg-[#0B1220] text-white">
            <div className="flex flex-col gap-6 max-w-full border-2 border-black rounded-sm px-2 py-2">
            <h1 className="font-bold text-3xl text-white">A LITTLE ABOUT ME</h1>
            <h2 className="font-bold text-2xl text-white">Beyond the Code.</h2>
            <p className="text-white italic">I enjoy turning ideas into functional web experiences. I'm focused on strengthening my JavaScript skills,exploring backend development,and understanding how applications work behind the scenes.</p>
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col px-1 py-1 max-w-full border-2 border-black rounded-sm">
                <AboutCard title="Coding" description="I love coding and building web applications. I enjoy solving problems and learning new technologies."/>
            </div>
            <div className="flex flex-col px-1 py-1 max-w-full border-2 border-black rounded-sm">
                <AboutCard title="Building" description="Creating projects and learning by doing."/>
            </div>
            <div className="flex flex-col px-1 py-1 max-w-full border-2 border-black rounded-sm">
                <Brain className="text-white"/>
                <p className="font-bold">Learning</p>
                <p>Understanding concepts, not just copying code.</p>
            </div>
            </div> 
            </div>
        </div>
    );
}
export default About;