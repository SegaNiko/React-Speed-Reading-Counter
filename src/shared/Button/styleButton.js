import styled from "styled-components";

const ButtonStyle = styled.a`
  display: block;
  cursor: pointer;
  width: 5.3%;
  text-decoration: none;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: black;
  font-size: 20px;
  border: 2px solid lightblue;
  margin: 1rem auto;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:focus {
    border: 2px solid lightblue;
    outline: none;
  }
  &:hover {
    background-color: lightblue;
    color: white;
  }
`;

export default ButtonStyle;
