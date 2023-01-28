import React from "react";
import styles from "../style";
import ServiceCard from "./ServiceCard";
import { services } from "../constants/index.js";


const Services = () => {
  return (
    <section
      id="service"
      className={`flex md:flex-row flex-col ${styles.paddingY}  `}
    >
      <div>
        <div>
          <h1 className={`${styles.heading3}  text-primary tracking-[-4%]`}>
            Services you look forward to at{" "}
            <span className="text-secondary ">VellBeLife. </span>
          </h1>
          <p className={`${styles.paragraph3} mt-2 mb-12 md:w-[60%]`}>
            Our commitment is to work with you for a long term health and
            lifestyle routine which is sustainable and customised to your needs.
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-5 gap-y-6 ">
            {services.map((service, index) => (
              <ServiceCard
                index={index}
                key={service.id}
                picture={service.picture}
                title={service.title}
                content={service.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
//<serviceCard key={service.id} {...service} index={index}/>