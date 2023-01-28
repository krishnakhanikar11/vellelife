import React from 'react'
import styles from '../style';


const ServiceCard = ({ id, picture, title, content }) => (
    <div key={id} className=" md:h-[452px] h-[380px] md:rounded-[28px] rounded-[22px] border-[#CCCCCC]  border-[1px]   hover:bg-dimGreen hover:shadow-sm hover:border-secondary">
      <img
        src={picture}
        alt={title}
        className="w-full md:h-[270px] h-[220px] md:rounded-[28px] rounded-[22px] p-1"
      />
      <div className="md:p-4 p-3">
        <h1 className="text-primary md:text-[24px] text-[22px] mb-2">
          {title}
        </h1>
        <p className={`${styles.paragraph3}`}>{content}</p>
      </div>
    </div>
  );

  export default ServiceCard;
  