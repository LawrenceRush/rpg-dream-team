import React, { useContext } from "react";
import CharacterContext from '../utils/CharacterContext'
import { Checkbox } from 'semantic-ui-react'


function AddFilterPowerCheckbox () {
    const Context = useContext(CharacterContext)
    const {handleFilterPowerCheckBox} = Context.bunchaFunctions
    const {filterPowerCheckBoxStatus} = Context.bunchaFunctions
    
return (<Checkbox
    checked = {filterPowerCheckBoxStatus}
     onChange={handleFilterPowerCheckBox}
  />
)
}

export default  AddFilterPowerCheckbox