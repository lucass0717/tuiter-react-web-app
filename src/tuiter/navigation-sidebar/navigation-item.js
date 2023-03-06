import React from "react";
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
        <a className={`list-group-item ${navItem.active ? 'active' : ''}`}
            href="#">
            <span><i className={`${navItem.icon} float-start`}></i></span>
            <span className="ps-2 d-none d-xl-block float-start">{navItem.label}</span>
        </a>
    );
};
export default NavigationItem;