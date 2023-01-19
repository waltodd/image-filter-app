import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: .5rem;
`;
export const Card = styled.div`
border-radius: 12px;
background: #f6f8fb;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//width: 402px;
height: 412px;
width: 90%;
  max-width: 402px;
  margin: auto;
position: relative;
justify-content: center;
  align-items: center;
`;
export const CardFilter = styled.div`
border-radius: 12px;
background: #ffffff;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//width: 302px;
height: 435px;
width: 90%;
  max-width: 402px;
  margin: auto;
position: relative;
padding:1rem;
justify-content: center;
  align-items: center;
`;

export const Col = styled.div`
  display:flex;
  justify-content:center;
  align-itens:center;
  flex-direction:column;

`;
export const Row = styled.div`
  display:flex;
  align-itens:flex-start;
  flex-direction:row;
  justify-content:space-between;
  text-align:center;
`;
export const InputRange = styled.input`
overflow: hidden;
display: block;
appearance: none;
max-width: 200px;
width: 90%;
margin: 0;
height: 36px;
cursor: pointer;

&:focus {
  outline: none;
}

&::-webkit-slider-runnable-track {
  width: 90%;
  height: 8px;
  border-radius:5px;
  background: #ddd;
}

&::-webkit-slider-thumb {
  position: relative;
  appearance: none;
  height: 22px;
  width: 22px;
  background:#ddd;
  border-radius: 100%;
  border: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 150ms;
}

&::-moz-range-track,
&::-moz-range-progress {
  width: 100%;
  height: 36px;
  background: #f6618c;
}

&::-moz-range-progress {
  background: blue;
}

&::-moz-range-thumb {
  appearance: none;
  margin: 0;
  height: 36px;
  width: 36px;
  background: #eee;
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
}

&::-ms-track {
  width: 100%;
  height: 36px;
  border: 0;
  /* color needed to hide track marks */
  color: transparent;
  background: transparent;
}

&::-ms-fill-lower {
  background: #ddd;
}

&::-ms-fill-upper {
  background: #ddd;
}

&::-ms-thumb {
  appearance: none;
  height: 36px;
  width: 36px;
  background: blue;
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
  /* IE Edge thinks it can support -webkit prefixes */
  top: 0;
  margin: 0;
  box-shadow: none;
}

}
`;
export const SpanPer = styled.span`
font-size:1rem;
text-align:center;
font-weight:500;
color:#6c6c72;
padding-top:.5rem;
`;
export const Label = styled.label`
font-size:1.1rem;
text-align:start;
font-weight:500;
colo:#2c2d46;
`;
export const BtnSave = styled.a`
  padding:1rem 1rem;
  background-color:#f6618c;
  color: #fff;
  border-radius: 2rem;
  text-decoration:none;
  justify-content:center;
  align-items:center;
  text-align:center;
  display:flex;
  margin:.5rem 5rem;
  &:hover {
    background-color:#ddd;
  }
`;
export const BtnModal = styled.div`
  padding:.5rem 1rem;
  background-color:#f6618c;
  color: #fff;
  border-radius: 2rem;
  justify-content:center;
  align-items:center;
  text-align:center;
  display:flex;
  margin:.5rem 2rem;
  cursor:pointer;
  &:hover {
    background-color:#ddd;
  }
`;
export const Modal = styled.div`
position:absolute;
border-radius: 12px;
background: #f6f8fb;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
height: 260px;
width: 90%;
  max-width: 402px;
  margin: auto;
justify-content: center;
  align-items: center;
  padding:2rem;

`;

export const BtnFt = styled.div`
  width:4rem;
  padding:.5rem 1rem;
  color: #2c2d46;
  border-radius: 10px;
  justify-content:space-between;
  align-items:flex-start;
  display:flex;
  margin:1rem
`;