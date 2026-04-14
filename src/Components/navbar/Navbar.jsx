import React, { useContext, useState } from 'react'
import { IsMobileContext } from '../../utilies/IsMobileContext';
import { a } from 'framer-motion/client';

export const Navbar = () => {
    const [activeMenu, setactiveMenu] = useState(false);
    const { ismobile } = useContext(IsMobileContext);

    const Links = [
        { id: 1, link: "Home", IsActive: true },
        { id: 2, link: "About" },
        { id: 3, link: "Movies" },
        { id: 4, link: "Contact" }
    ];

    return (
        <nav>
            <div className="logo">
                <img src="src/assets/images/c9d524a9e9ba32d94fb7a0310644f7f1.png" alt="" />
            </div>

            {!ismobile && <>    <div className="menu">
                <ul>
                    {Links.map((link) => (
                        <li key={link.id}>
                            <a href="#" className={link.IsActive ? "active" : ""}>
                                {link.link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
                 <div className="btn">
                    <button>Get Started</button>
                </div> </> 
            }
            {ismobile && (<>
                <div className="bar" onClick={() => setactiveMenu(!activeMenu)}>
                    <div></div>
                    <div></div>
                </div>
                <div className={`mobile-menu ${activeMenu?"active":""}`}>
                    <ul>
                        {Links.map((link, index) => <a key={index} href='#' className={link.IsActive ?"active":""}>{ link.link}
                        </a>)}
                    </ul>
                </div>
            
            </>)}

           
        </nav>
    )
};