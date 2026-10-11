import { Code2,Brain } from "lucide-react";
function About(){
    return(
        <div className="flex flex-col md:flex-row md:justify-centre gap-3 px-3 py-2 bg-[#E5EDE3] text-[#18251F]">
            <div className="flex flex-col gap-6 w-[50%] border-2 border-black rounded-sm px-2 py-2">
            <h1 className="font-bold text-3xl text-[#18251F]">A LITTLE ABOUT ME</h1>
            <h2 className="font-bold text-2xl text-[#58645B]">Beyond the Code.</h2>
            <p className="text-[#58645B] italic">I enjoy turning ideas into functional web experiences. I'm focused on strengthening my JavaScript skills,exploring backend development,and understanding how applications work behind the scenes.</p>
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col px-1 py-1 max-w-full border-2 border-black rounded-sm">
                <Code2 className="text-[#236B4B]"/>
                <p className="font-bold">Building</p>
                <p>Creating projects and learning by doing.</p>
            </div>
            <div className="flex flex-col px-1 py-1 max-w-full border-2 border-black rounded-sm">
                <Brain className="text-[#236B4B]"/>
                <p className="font-bold">Learning</p>
                <p>Understanding concepts, not just copying code.</p>
            </div>
            </div> 
            </div>
        </div>
    );
}
export default About;