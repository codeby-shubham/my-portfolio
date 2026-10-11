import { Code2,Palette,FileCode2,Atom,Wind,MonitorSmartphone,Coffee,Code,Terminal,Server,Webhook,Database } from "lucide-react";
function Skills(){
    return(
        <div className="flex flex-col gap-2  w-full   bg-[#E5EDE3] text-[#18251F]">
            <div className="px-4 py-4 border-2 ml-3 border-black rounded-sm w-[50%] mt-5">
            <h1>WHAT I WORK WITH</h1>
            <h2 className="font-bold"> Skills & Technologies</h2>
            <h3>Tools and Technologies I use to build projects and keep learning.</h3>
            <div className="gap-4 grid grid-col-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 items-centre border-2 border-black rounded-sm px-3 py-3">
                    <Code2/>
                    <h2>HTML</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Palette/>
                    <h2>CSS</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm px-3 py-3">
                    <FileCode2/>
                    <h2>JAVASCRIPT</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Atom/>
                    <h2>REACT</h2>
                </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Coffee/>
                    <h2>JAVA</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Terminal/>
                    <h2>C</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Wind/>
                    <h2>TAILWIND</h2>
                </div>
                <div className="flex flex-col gap-2 items-centre  border-2 border-black rounded-sm  px-3 py-3">
                    <Code/>
                    <h2>PYTHON</h2>
                </div>
                </div>
                </div>
            </div>
        
    )
}
export default Skills;