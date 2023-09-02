import React from 'react'
import './portcomponent.css'
import {AiFillGithub, AiOutlineEye} from 'react-icons/ai'


const PortComponent = ({data, url}) => {
  let className = 'portContainer'
  console.log(data.demoUrl[1])
  return (
    <div className={className}>
      
        <div className="portLeft">
            <img src={url} alt="" />
        </div>
        <div className="portRight">
            <h2>{data.title} </h2>
            <article><p>{data.descritption}</p></article>
           <div className='stackUsed'> <small>{data.stackUsed[0]}</small>
            <small>{data.stackUsed[1]}</small>
            </div>
            <div className="checkOut">
                <a href={data.demoUrl[0]}>Code <AiFillGithub /></a>
                <a href={data.demoUrl[1]}>Live Demo <AiOutlineEye /></a>
            </div>
        </div> 
    </div>
  )
}

export default PortComponent