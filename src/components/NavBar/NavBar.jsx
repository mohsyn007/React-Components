import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu, IoMdClose } from 'react-icons/io';


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" },
    ];



    return (
        <nav className="text-black bg-blue-200 p-6 px-6 ">
            <div onClick={() => setOpen(!open)} className="md:hidden  text-2xl">
                {
                    open === true ? <IoIosMenu></IoIosMenu> : <IoMdClose ></IoMdClose>
                }

            </div>
            <ul className={` ${open?'top-12':'-top-60'} md:static duration-1000 px-6 md:flex absolute  `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;