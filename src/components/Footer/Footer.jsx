function Footer(props) {
  return (
    <div className="h-36 w-[33%] flex w480:w-full w480:h-44 w640:w-screen w768:w-full w768:px-5 w768:h-42 w640:pb-8 w1024:w-2/6 ">
      <div className="w-28 w1024:h-30">
        <img
          src={props.img}
          alt={props.alt}
          className="h-full min-w-[112px] w1024:min-w-[90px] w1024:h-30"
        />
      </div>
      <div className="content flex flex-col w-[308px] w480:gap-y-1 px-5 gap-y-5 justify-center w1440:gap-y-1">
        <span className="text-[#666] text-3xl w480:text-2xl font-Inter font-bold w480:text-[#c6c5ca] w768:text-3xl w1024:text-2xl w1440:text-xl">
          {props.num}
        </span>
        <span className="text-black font-bold hover:text-[#e15d51] w480:text-base text-lg w480:text-[#000009]  w768:text-lg w1440:text-base">
          {props.title}
        </span>
        <span className="text-[#3f3f3f] w480:text-[#7f7c83] w480:text-base w768:text-lg w1440:text-sm">
          {props.desc}
        </span>
      </div>
    </div>
  );
}

export default Footer;
