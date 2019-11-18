import Dropdown from 'react-bootstrap/Dropdown'
import React,  {useContext} from "react";
import CharacterContext from '../utils/CharacterContext'


export default function MakeDropdown(){

    const Context = useContext(CharacterContext)
    const { powerLevelFilter} = Context.bunchaFunctions
    const {handlePowerLevelFilter} = Context.bunchaFunctions

    return(<>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Power Level
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Power Level</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> 
<input  name="name" type="number" onChange={handlePowerLevelFilter} value={powerLevelFilter} required/>

</>
    )
}