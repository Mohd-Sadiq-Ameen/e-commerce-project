// Path = components/HomePage.jsx
import Carousel from "./Carousel";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="bg-slate-500 overflow-hidden ">
        <div>
            <Navbar/>
        </div>
      <div className="w-full min-w-[400px] max-w-[1100px] m-auto bg-green-500 max-h-[300px]">
             <Carousel/> 
      </div>
    </div>
  );
}
