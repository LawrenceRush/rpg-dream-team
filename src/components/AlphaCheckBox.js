import React, { useContext } from "react";
import CharacterContext from '../utils/CharacterContext'
import { Checkbox } from 'semantic-ui-react'


function AddAlphaCheckbox () {
    const Context = useContext(CharacterContext)
    const {handleAlphaCheckBox} = Context.bunchaFunctions
    const {alphaCheckBoxStatus} = Context.bunchaFunctions
    
return (<Checkbox
    checked = {alphaCheckBoxStatus}
    onChange={handleAlphaCheckBox}
  />
)
}

export default  AddAlphaCheckbox