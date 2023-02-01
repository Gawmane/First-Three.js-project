import { useState } from "react";
import { createContext, useContext } from "react";

export const chairColors = [
    {
        color: "#683434",
        name: "brown",
    },
    {
        color: "#1a5e1a",
        name: "green",
    },
    {
        color: "#659994",
        name: "blue",
    },
    {
        color: "#896599",
        name: "mauve",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#ececec",
        name: "white",
    },
];

export const cushionColors = [
    {
        color: "#683434",
        name: "brown",
    },
    {
        color: "#1a5e1a",
        name: "green",
    },
    {
        color: "#659994",
        name: "blue",
    },
    {
        color: "#896599",
        name: "mauve",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#ececec",
        name: "white",
    },
];

const Customization = createContext({});

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("leather");
    const [legs, setLegs] = useState(1);
    const [chairColor, setChairColor] = useState(chairColors[0]);
    const [cushionColor, setCushionColor] = useState(cushionColors[0]);
    return (
        <Customization.Provider value={{
            material,
            setMaterial,
            legs,
            setLegs,
            chairColors,
            chairColor,
            setChairColor,
            cushionColors,
            cushionColor,
            setCushionColor,
        }}>
            {props.children}
        </Customization.Provider>
    );
};
export const useCustomization = () => {
    const context = useContext(Customization);
    return context;
};