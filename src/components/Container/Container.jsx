import Content from "../Content/Content";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import pcImg from "../../assets/images/image-retro-pcs.jpg";
import noteImg from "../../assets/images/image-top-laptops.jpg";
import gameImg from "../../assets/images/image-gaming-growth.jpg";

function Container() {
  return (
    <div className="w480:px-[0px] h-auto py-[25px] px-[35px] w480:gap-y-5 w480:py-[0] gap-y-10 flex flex-col items-center  w1024:w-screen w1440:h-auto">
      <Header />
      <Content />
      <div className="w-[70%] w480:flex-col w480:gap-y-[30px] w480:py-8 w480:pb-10  h-36 flex justify-between w640:flex-col w640:gap-y-[30px] w768:mb-10 w640:px-[15px] w768:flex w768:flex-col w768:gap-y-[30px] w768:px-0 w1024:w-screen w1024:px-20">
        <Footer
          img={pcImg}
          alt="Logo PC News"
          num="01"
          title="Reviving Retro PCs"
          desc="What happens when old PCs
          are given modern upgrades?"
        />
        <Footer
          img={noteImg}
          alt="Logo Note News"
          num="02"
          title="Top 10 Laptops of 2022"
          desc="Our best picks for various
          needs and budgets."
        />
        <Footer
          img={gameImg}
          alt="Logo Game News"
          num="03"
          title="The Growth of Gaming"
          desc="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
}

export default Container;
