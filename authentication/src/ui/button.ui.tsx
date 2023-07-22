import React from "react";

export const ButtonUi: React.FC<any> = (props) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}