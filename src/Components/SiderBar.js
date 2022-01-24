import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SideBarData} from "./SideBarData";
import axios from "axios";
import {IconContext} from "react-icons";
import {motion} from "framer-motion"


function Menu() {
    const [menu, set_menu] = useState([])

    const fetch_menu = () => {
      axios ({
          method: "get",
          url: "http://localhost:3001/sideBarData"
      }).then(res => set_menu(res.data))
    }

    useEffect(() => {
        fetch_menu()
    }, [])

    return (
        <motion.div className="menu-container">
            {
                menu.map(menu_data => <motion.div whileHover={{scale: 1.1
                }}><Link to="#" className="menu-item">{menu_data.title}</Link></motion.div>)
            }
        </motion.div>
    )
}

function Profile() {
    const [profile, setProfile] = useState([])

    const fetch_data = () => {
        axios ({
            method: "get",
            url: "http://localhost:3001/infos"
        }).then(res => setProfile(res.data))
    }

    useEffect(() => {
        fetch_data()
    }, [])

    return (
        <motion.div className="profile-container" whileHover={{scale: 1.1}}>
            <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/272055408_664358348212416_545733847512526987_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=h1s7NV9bnrwAX_LQkM0&_nc_ht=scontent-vie1-1.xx&oh=03_AVLpbMOYRs9FymQy8IFAS8V6fVLlANiVVZ7ZEmvaXf0Bpg&oe=62132321" alt="nothing"/>
            {
                profile.map(basic_infos_data => <h2 className="title">{basic_infos_data.name}</h2>)
            }
        </motion.div>
    )
}



function SideBar(props) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <motion.div className="navbar">
                <Link to="#" className="menu-bars">
                    <motion.div whileHover={{scale: 1.1}}><FaIcons.FaBars onClick={showSidebar}/></motion.div>
                </Link>
                <div>
                    <Menu/>
                    <Profile/>
                </div>
            </motion.div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toogle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {
                        SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cname}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
}

export default SideBar;