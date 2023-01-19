import React, {useState} from 'react'
import { arrFormat } from "../../constants";
import{DropdownWrapper,BtnDropdown,DropdownContent,Li} from './indexStyle'
import{IoIosArrowDown} from 'react-icons/io'


const Dropdown = ({getSelectedExt}) => {
    const [showDropdown,setShowDropdown] = useState(false);
    const [extensionLabel,setExtensionLabel] = useState('PNG');
    const handleShowDropdown = () =>{
      setShowDropdown(!showDropdown)
    }
    const handleSelectedExt =(extension,name) =>{
      getSelectedExt(extension)
      setExtensionLabel(name)
      setShowDropdown(false)
    }
  return (
    <DropdownWrapper>
        <BtnDropdown onClick={handleShowDropdown}>{extensionLabel} <IoIosArrowDown size='1rem'/></BtnDropdown>
        {showDropdown && 
           
            <DropdownContent>
            {arrFormat.map(({ name, extension }, idx) => (
                    <Li onClick={()=>handleSelectedExt(extension, name)} key={idx} >{name}</Li>
            ))}
            </DropdownContent>
            
        }
        
    </DropdownWrapper>
  )
}

export default Dropdown