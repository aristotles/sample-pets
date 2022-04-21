import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpeciesSelectedStatus } from "../../types/enum";

import "./style.css";

//Button that updates the state of the species selected by the user.
export function SpeciesButton(props: { speciesText: string,setSpecies: (arg0: SpeciesSelectedStatus) => void }) {

  //On click will set the parents/App's state variable of selected species to the correct value.
  const onButton= () => {
    if(props.speciesText==='Cat'){
      props.setSpecies(SpeciesSelectedStatus.Cat)
    }
    else{
      props.setSpecies(SpeciesSelectedStatus.Dog)
    }
  }
 
  return <button onClick={onButton} className="Species">{props.speciesText}</button>
}