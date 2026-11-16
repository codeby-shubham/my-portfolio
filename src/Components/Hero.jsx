import { ArrowUpRight,Phone } from "lucide-react";
import profile from "./Shubham.jpeg";
function Hero(){
    return(
        <div className="flex flex-col p-4 bg-[#0B1220] text-white gap-2">
            <span className="text-[#1BFC06] bg-[#006400] p-2 rounded-2xl text-sm w-fit"> 
                 ⦿ Available for learning & opportunities
            </span>
            <div>
                <h1 className="text-4xl font-bold text-white md:text-5xl">Hello, I'm Shubham Ojha!</h1>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-sky-400 md:text-3xl">B.Tech CSE Student</h2>
            </div>
            <div>
                <p className="text-base text-slate-400">Galgotias University · 2026-2030 </p>
            </div>
            <div>
                <p className="max-w-sm md:max-w-md lg:max-w-lg text-base text-slate-400 leading-relaxed">
                    I enjoy building web applications and exploring how technology works. Currently learning full-stack development and improving my problem-solving skills.
                </p>
            </div>
        </div>
    )
}
export default Hero;