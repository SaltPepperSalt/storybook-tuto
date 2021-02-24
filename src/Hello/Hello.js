import React from "react";

const Hello = ({ name, big }) => {
    if (big) {
        return <h1>Hi, {name}</h1>;
    } else {
        return <p>Hi, {name}</p>;
    }
};

export default Hello;
