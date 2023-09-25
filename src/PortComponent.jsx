import React from "react";
import "./portcomponent.css";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { HiCake } from "react-icons/hi";

const PortComponent = ({ data, url }) => {
  let className = "portContainer";

  return (
    <div className={className}>
      <div className="portLeft">
        <img src={url} alt="" />
      </div>
      <div className="portRight">
        <h2>
          {data.title} {data.id === 2 && <GiShoppingCart />}
          {data.id === 1 && <HiCake />}
        </h2>
        <article>
          <p>{data.descritption}</p>
        </article>
        <div className="stackUsed">
          {" "}
          <small>{data.stackUsed[0]}</small>
          <small>{data.stackUsed[1]}</small>
        </div>
        <div className="checkOut">
          <a href={data.demoUrl[0]} target="_blank">
            Code <AiFillGithub />
          </a>
          <a href={data.demoUrl[1]} target="_blank">
            Live Demo <AiOutlineEye />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortComponent;
