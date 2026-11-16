import { ArrowUpRight } from "lucide-react";

function Navbar(){
    return(
        <nav className="flex flex-row justify-between p-2 bg-[#0B1220] flex-wrap md:gap-6">
            <div className="text-2xl font-bold italic logo text-white">
                Shubham
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-6 text-slate-300"> 
                <a href="#home">Home</a>
                <a href="#About">About</a>
               <a href="#Education">Education</a>
                <a href="#Skill">Skill</a>
                <a href="#Project">Project</a>
            </div>
            <div className="contact bg-sky-950 rounded-sm p-1 text-white">
                <a href="https://www.instagram.com/p/De44Jr9TbOt/">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar;