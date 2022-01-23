import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GiIcons from "react-icons/gi"
import * as SiIcons from "react-icons/si"
import {SiIcon} from "react-icons/si";
import * as CgIcons from "react-icons/cg"
import * as BiIcons from "react-icons/bi"
import * as RiIcons from "react-icons/ri"

export const SideBarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cname: "nav-text"
    },
    {
        title: "Experiments",
        path: "/experiments",
        icon: <GiIcons.GiAtom/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        cname: "nav-text",
        subNav: [
            {
                title: "2006",
                path: "/experiments/2006",
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: "2007",
                path: "/experiments/2007",
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: "2008",
                path: "/experiments/2008",
                icon: <IoIcons.IoIosPaper/>
            },
        ],
    },
    {
        title: "Programming skills",
        path: "/programming-skills",
        icon: <FaIcons.FaUserNinja/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        cname: "nav-text",
        subNav: [
            {
                title: "Trainings",
                path: "/programming-skills/trainings",
                icon: <GiIcons.GiNinjaStar/>
            }
        ]

    },
    {
        title: "Schools",
        path: "/schools",
        icon: <IoIcons.IoIosSchool/>,
        cname: "nav-text"
    },
    {
        title: "Hobby",
        path: "/hobby",
        icon: <BiIcons.BiBaseball/>,
        cname: "nav-text"
    },
]