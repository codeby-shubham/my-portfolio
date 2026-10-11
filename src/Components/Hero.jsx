import { ArrowUpRight,Phone } from "lucide-react";
import profile from "./Shubham.jpeg";
function Hero(){
    return(
        <div className="flex flex-col md:flex-row items-center gap-12 bg-[#F7F5EF] text-[#18251F] w-full">
        <div className="flex flex-col gap-4 px-4 py-4">
            <h1 className="text-[#18251F]">HELLO I'M</h1>
            <h2 className="text-3xl font-bold text-[#58645B] italic">Shubham Ojha</h2>
            <p className="text-[#52745D]">B.Tech CSE · Galgotias University</p>
            <div className="flex gap-3 w-full">
                <button className="flex items-center gap-1 bg-blue-600 text-white px-1 py-2 rounded-lg">
                    View Projects
                    <ArrowUpRight/>
                </button>
                <a href="https://www.instagram.com/shubham._.0201" className="flex items-center gap-1 bg-blue-600 text-white px-1 py-2 rounded-lg">
                    Contact Me
                    <Phone/>
                </a>
            </div>
            </div>
            <img src={profile} className="w-40 h-40 rounded-full object-cover"/>
        </div>
    )
}
export default Hero;