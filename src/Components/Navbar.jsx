import { ArrowUpRight } from "lucide-react";

function Navbar(){
    return(
        <nav className="fixed top-0 left-0 z-50 w-[100%] flex justify-between items-center bg-[#F7F5EF] text-[#18251F] px-4 py-4 h-18">
            <div className="text-3xl font-bold italic">Portfolio</div>
            <div className="flex italic items-center gap-6">
            <a href="#Hero">Home</a>
            <a href="#About">About</a>
             <a href="#Skills">Skills</a>
             <a href="#Projects">Projects</a>
            
            </div>
        </nav>
    )
}
export default Navbar;