import React from 'react'
import styles from '../style'
import about from "../assets/about.png"
import tick from "../assets/tick.png"

const About = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
        <div>
          <h1 className={`${styles.heading3}  text-primary tracking-[-4%]`}>
            Hey there! Welcome to our holistic{" "}
            <span className="text-secondary ">wellness center. </span>
          </h1>
          <p className={`${styles.paragraph3} mt-2 mb-12`}>
            We've got everything you need to know about taking care of your
            mind, body, and soul.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex  items-center mb-6">
              <img
                src={tick}
                alt="tick"
                className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
              />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Physical wellness
              </span>
              <p className="text-greenPara text-lg">to strengthen</p>
            </div>

            <div className="flex  items-center mb-6">
              <img
                src={tick}
                alt="tick"
                className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
              />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Physical wellness
              </span>
              <p className="text-greenPara text-lg">to strengthen</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:mt-4">
            <div className="flex  items-center mb-6">
              <img
                src={tick}
                alt="tick"
                className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
              />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Physical wellness
              </span>
              <p className="text-greenPara text-lg">to strengthen</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
        <img src={about} alt="vellbe" className="md:w-[67%]  " />
      </div>
    </section>
  );
};

export default About;