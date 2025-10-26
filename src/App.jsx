import "./App.css";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="flex  justify-center items-center w-full min-h-screen bg-linear-to-b from-[#373e44] from-[-100%] to-[#191b1f] to-100% ">
      <div className="flex gap-8 w-full   layout-container py-[60px] px-[29px]">
        {/* Left container */}
        <div className="bg-[#616161D1] border border-[#96BEE7] rounded-2xl flex-1  left-container  "></div>

        {/* Right container */}
        <div className="flex flex-col gap-6 flex-1 rounded-2xl mr-4 ">
          <Hero />
          <hr />
          <ImageGallery />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
