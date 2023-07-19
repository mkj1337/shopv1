import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full h-[55vh] overflow-hidden relative flex justify-center items-center fixed-img">
      <div className="absolute flex flex-col items-center justify-between gap-10 px-[3rem] sm:px-0">
        <p className="text-white leading-[3rem] text-4xl sm:text-5xl text-center sm:leading-[4rem] font-thin">
          Introducing the Perfectly
          <br /> Simple Clothing Brand for
          <br /> You.
        </p>
        <Link
          to="/catalog"
          className="w-[150px] text-white text-center py-3 border-[1px] border-white"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
