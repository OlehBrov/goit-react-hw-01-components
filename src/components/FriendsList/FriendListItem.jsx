 const FriendListItem = (props) => {
  return (
    <li className="item">
      <span className="status">{props.onStatus}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.friendName}</p>
    </li>
  );
};
export default FriendListItem;