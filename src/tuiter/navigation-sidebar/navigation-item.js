import React from "react";
import {Link} from "react-router-dom";
const NavigationItem = (
    {
        navItem = {
            icon: 'bi bi-house-door-fill',
            label: 'Home',
            active: 'false'
        }
    }
) => {
    return(
        <>
            <Link to={`/tuiter/${navItem.label.toLocaleLowerCase()}`}
                  className={`list-group-item ${navItem.active ? 'active' : ''}`}>
                <span><i className={`${navItem.icon} float-start`}></i></span>
                <span className="ps-2 d-none d-xl-block float-start">{navItem.label}</span>
            </Link>
        </>

    );
};
export default NavigationItem;