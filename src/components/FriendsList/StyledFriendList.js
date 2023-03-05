const { default: styled } = require('styled-components');

export const StyledFriendList = styled.ul`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 40px;
    gap: 20px;
    `

export const StyledFriendListItem = styled.li`

    display: flex;
    width: 100%;
    align-items: center;
    border: 2px solid gray;
    padding: 20px;
    gap: 25px;
    box-shadow: -9px 14px 33px -1px rgba(0,0,0,0.75);
  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  
  }
`;
