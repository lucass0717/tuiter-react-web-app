import React from "react";
import navItems from './navItems.json';
import NavigationItem from "./navigation-item";
const NavigationSidebar = (
    {
        active = "Explore"
    }
) => {
    return (
        <>
        <div className="list-group">
            {navItems.map(navItem => {
                return(
                    <NavigationItem
                        navItem={
                            {
                                ...navItem,
                                active: (active === navItem.label)
                            }
                        }
                        key={navItem.label}
                    />
                )
            }


            )}
        </div>
        <div className="d-grid mt-2">
            <a href="#"
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        </>
    );
};
export default NavigationSidebar;