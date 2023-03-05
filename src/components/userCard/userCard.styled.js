import styled from "styled-components";

export const StyledProfile = styled.div`
color: black;
display: flex;
flex-direction: column;
justify-items: center;

  .tag, .location, label{
    color: gray;
    margin-bottom: 10px;
  }
  .label{
    font-weight: 700;
  }
  .description{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin: 0;
  }
`

export const StyledList = styled.ul`
  display: flex;
  margin: 10px;
  
  li{
    display: flex;
    flex-direction: column;
    background-color: #d5d1d1;
    border: 1px solid #999999;
    width: calc(100%/3);
    font-size: 24px;
    padding: 15px;
  }
`
