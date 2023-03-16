import React, { useEffect, useState } from 'react';
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

import MenuItems from './MenuItems';
import api from "../services/api";
import cx from "classnames";

const Navbar = () => {
    const [navigation, setNavigation] = useState([])

    useEffect(() => {
        api.getInfoPromise()
            .then((info) => {
                setNavigation(info.navigation)
            })

    }, [])

    const iconClasses = "h-10 w-10";

    const handleClick = () => {
        setOpen(!open);
    }

    const [open, setOpen] = useState(false);


    return (
        <nav className='nav'>
            <div onClick={handleClick} className="px-2 md:hidden">
                <div>

                {(!open) && (
                    <Bars2Icon className={iconClasses} />
                    )}
                {(open) && (
                    <XMarkIcon className={iconClasses} />
                    )}
                </div>
            </div>
            <ul className={cx("menus", {"hidden": ! open })}>
                {navigation.map((data, index) => {
                    const depthLevel = 0;
                    return <MenuItems data={data} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar; 