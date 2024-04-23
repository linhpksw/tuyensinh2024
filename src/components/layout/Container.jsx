import React from "react";

const Container = ({ className, children }) => {
    return (
        <div
            className={`container w-full px-8 pb-8 lg:pt-8 mx-auto xl:px-0 
            ${className ? className : ""}`}>
            {children}
        </div>
    );
}

export default Container;