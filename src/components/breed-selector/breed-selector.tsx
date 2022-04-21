import "./style.css";
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import { Question } from "../question";

//Component that asks use their pet's breed and shows a textfield. 
//Also an image at the bottom corresponding to pet species.

export function BreedSelector(props: { allBreeds: string[], imageUrl: string }) {
  return <div className="BreedSelector">
    <Question passedText="Your pet’s breed is?"></Question>

    {/* The Component that includes a textfield and the dropdown selector */}
    <Combobox
      placeholder="Start typing to find"
      data={props.allBreeds}
      selectIcon="🔍"
      style={{ marginLeft: '30px' }}
      listProps={{ style: { color: "#01447680", fontSize: "18px", fontFamily: "search" } }}
      inputProps={{ style: { color: "#01447680", fontSize: "18px", fontFamily: "search" } }}
    />
    <img className="PetImage" src={props.imageUrl} alt="pet-image">
    </img>
  </div>
}