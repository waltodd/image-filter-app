import styled from "styled-components";

export const DropdownWrapper = styled.div`
    top:2rem;
    position:relative;
    margin: 0 auto;
    width:90%;
    max-width:200px;
`
export const BtnDropdown = styled.div`
    display:flex;
    
    justify-content:space-between;
    padding: .5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background: #FFFFFF;
border-radius: 5px;
cursor:pointer;
font-size: 16px;
line-height: 24px;
color: #202142;
align-items:center;
`
export const DropdownContent = styled.div`
position:relative;

display:grid;
grid-template-column: repeat(1,1fr);
justify-content:center;
padding: .5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background: #fff;
margin-top:.5rem;
border-radius: 5px;
cursor:pointer;
font-size: 16px;
grid-gap:.5rem;
align-items:center;
`
export const Li = styled.div`


padding:.5rem 4.5rem;

border-radius: 5px;
color: #202142;
&:hover{
    background-color:#ddd;
}
`