import { useState, useEffect } from "react";
import mainImg from "../../assets/images/image-web-3-desktop.jpg";
import mobImg from "../../assets/images/image-web-3-mobile.jpg";

function Content() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [respImg, setRespImg] = useState(mainImg);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (windowSize.width <= 480) {
      setRespImg(mobImg);
    } else {
      setRespImg(mainImg);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="w-[70%] h-[68%] w480:gap-y-[50px] w480:flex-col w480:px-[15px] flex justify-between font-Inter w640:flex-col w640:px-4 w640:gap-y-10 w768:w-screen w768:px-5 w1024:w-11/12">
      <div className="h-full w-[65%] w480:w-[100%] w480:gap-y-[10px] gap-y-[35px] flex flex-col w640:w-full w768:w-3/5 w768:gap-y-5 ">
        <div className="h-[60%] w480:h-[100%] w768:h-full">
          <img src={respImg} alt="" className="h-full w-[100%]" />
        </div>
        <div className="h-full flex w480:flex-col w480:gap-y-[10px] w1024:h-3/6">
          <span className="w-3/6 flex items-center text-7xl font-bold font-Inter w480:w-[100%] w640:items-end w768:text-4xl w768:leading-20 text-left w768:items-center w1024:text-5xl w1440:text-6xl w1440:text-center w1440:items-start">
            The Bright Future of Web 3.0?
          </span>
          <span className="w-3/6 flex flex-col justify-between text-[#666666] text-base leading-[30px] font-normal text-left w480:w-[100%] w480:gap-y-[20px] w480:text-sm w480:leading-[25px] w768:px-2 w1440:px-5 w1440:text-lg">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            <button className="w-[200px] h-[50px] border-none bg-[#f15d51] hover:bg-[#00001a] text-white font-semibold text-base shadow-3xl ">
              READ MORE
            </button>
          </span>
        </div>
      </div>
      <div className="w-[32%] flex flex-col py-[20px] px-[20px] bg-[#00001a] justify-between w480:w-full w480:gap-y-[10px] w640:w-4/6 w768:w-2/5  w768:px-4 w1024:px-4 w1440:px-5">
        <h1 className="text-5xl text-[#f1a759] font-bold w480:text-3xl w768:text-2xl w1024:text-3xl">
          New
        </h1>
        <span className="text-[#ffffff] h-[125px] flex flex-col justify-center gap-y-2.5 ">
          <h2 className="text-[#ffffff] hover:text-[#f15d51] text-2xl font-bold cursor-pointer w480:text-xl  w1440:text-lg">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-[1.1rem] text-[#666] w480:text-sm w480:text-[#858698] w1440:text-base">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </span>
        <hr className="border-[#666]" />
        <span className="text-[#ffffff] h-[125px] flex flex-col justify-center gap-y-2.5">
          <h2 className="text-[#ffffff] hover:text-[#f15d51] text-2xl font-bold cursor-pointer w480:text-xl w1440:text-lg">
            The Downsides of AI Artistry
          </h2>
          <p className="text-[1.1rem] text-[#666] w480:text-sm w480:text-[#858698] w1440:text-base">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </span>
        <hr className="border-[#666]" />
        <span className="text-[#ffffff] h-[125px] flex flex-col justify-center gap-y-2.5">
          <h2 className="text-[#ffffff] hover:text-[#f15d51] text-2xl font-bold cursor-pointer w480:text-xl w1440:text-lg">
            Is VC Funding Drying Up?
          </h2>
          <p className="text-[1.1rem] text-[#666] font-Inter  w480:text-sm w480:text-[#858698] w1440:text-base">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Content;
