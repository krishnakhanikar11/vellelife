import React from "react";
import styles from "../style";
import hi from "../assets/hi.png";


const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}
    >
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
        <div>
          <h1 className={`${styles.heading2}  text-primary tracking-[-4%]`}>
            We celebrate your first step towards{" "}
            <span className="text-secondary ">Health.</span>
          </h1>
          <p className={`${styles.paragraph} mt-2 mb-16`}>
            join us as we craft the art of Well-being.
          </p>

          <a href="https://wa.me/message/5YDDLL4SIQZYO1">
        <button
            type="button"
            
            className=" inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
          >
            BOOK FREE SESSION
            
          </button>
        </a>
        </div>
      </div>
       <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}
        >
          <img
            src={hi}
            alt="vellbe"
            className="w-[100%] h-[100%] "
          />
        </div>
    </section>
  );
};

export default Hero;
