import React from 'react'
import bgGradient from '../assets/bgGradient.png'
import styles from '../style'

const CTA = () => {
  return (
    <section id="service" className={`${styles.paddingX}  ${styles.paddingY}  bg-cover  bg-center bg-no-repeat `} style={{ backgroundImage:`url(${bgGradient})` , height: '100vh'   }}>
      
      <div className= {`md:mt-[26%] mt-[96%] ${styles.boxWidth}`}>
        <h1 className={`${styles.heading3}  mb-6 md:w-[35%]  text-primary tracking-[-4%]`}>
        We at VellBe Life await your arrival.{" "}
          <span className="text-secondary ">Join us. </span>
        </h1>
        <a href="https://wa.me/message/5YDDLL4SIQZYO1">
        <button
            type="button"
            
            className=" inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
          >
            BOOK NOW
            
          </button>
        </a>
        
      </div>
    </section>
  );
};

export default CTA