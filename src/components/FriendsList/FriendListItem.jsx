import { StyledFriendListItem } from "./StyledFriendList"; 
const FriendListItem = (props) => {
  return (
    <StyledFriendListItem className="item"{...props}>
      <span className="status">{props.onStatus}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.friendName}</p>
    </StyledFriendListItem>
  );
};
export default FriendListItem;