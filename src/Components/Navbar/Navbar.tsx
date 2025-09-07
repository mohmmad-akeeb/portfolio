import React, { useState } from 'react'
import './Navbar.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Navbar: React.FC = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className="nav-name">
            <h1>Akeeb</h1>
            <img src={theam_pattern} alt="" />
        </div>
        <ul className="nav-menu">
            <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt='' />:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt='' />:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt='' />:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt='' />:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}
