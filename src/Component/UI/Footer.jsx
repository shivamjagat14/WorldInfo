import React from 'react'
import footerContact from "../../api/footerContact.json"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const footerIcon={
    MdPlace: <FaLocationDot />,
    IoCallSharp:<IoMdCall/>,
    TbMailPlus:<IoIosMail/>

  }
  return (
    <>
    <footer className='footer-section'>
      <div className="container grid grid-three-cols">
        {
         footerContact.map((curdata,index)=>{
          const {icon,title,details}=curdata;
          return(
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p className='titles'>{title}</p>
                <p className='details'>{details}</p>
              </div>
            </div>
          )
         })
        }
      </div>
    </footer>
    <div className="copyright-area">
        <div className="container">
          <div className=" grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024 all Right Reserved
                <NavLink to="">
                  Shivam Jagat
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul className='menu-list'>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                 <li>
                  <NavLink to="" target='_blank'>Social</NavLink>
                </li>
                 <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
