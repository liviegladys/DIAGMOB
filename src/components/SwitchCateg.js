import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

const SwitchCateg = ({LaCateg}) => {

    const [lien, setLien] = useState(LaCateg);
    //const [nomCateg, setNomCateg] = useState(LaCateg);
    useEffect(() => {
        setLien(`/${LaCateg}`);
    },[]);

    return (
        <>
            <NavLink to={LaCateg}>{LaCateg}</NavLink>
        </>
    )
};

export default SwitchCateg

/*
<button type="button" onClick={handleClick}>
    Go experiencesEnMobilites
</button>
//*/