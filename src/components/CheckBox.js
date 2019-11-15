import React, { useContext } from "react";
import CharacterContext from '../utils/CharacterContext'
import { Checkbox } from 'semantic-ui-react'


function AddCheckbox () {
    const Context = useContext(CharacterContext)
    const {handleCheckBox} = Context.bunchaFunctions
    const {checkBoxStatus} = Context.bunchaFunctions
    
return (<Checkbox
    checked = {checkBoxStatus}
    //isSelected={this.state.checkboxes[option]}
    // value={}
    // disabled={}
     onChange={handleCheckBox}
  />
)
}

export default  AddCheckbox