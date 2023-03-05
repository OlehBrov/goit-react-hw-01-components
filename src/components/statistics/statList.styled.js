import styled from 'styled-components';

export const StatisticSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const StyledStatList = styled.ul`
display: flex;
width: 100%;

li{
    display: flex;
    flex-direction: column;
    width: calc(100%/4);
  
}
`

export const StyledStatItem = styled.li`
  background-color: ${props => props.background};
  color: white;
  -webkit-text-stroke: 1px gray;
  padding: 10px 15px;

`