import FriendListItem from "./FriendListItem"
import { StyledFriendList } from "./StyledFriendList"

export const FriendList = (props) => {
    return <StyledFriendList className="friend-list">
        {props.data.map(prop => 
        (<FriendListItem
            key={prop.id}
            onStatus={prop.isOnline}
            avatar={prop.avatar}
            friendName={prop.name}
        />)
            )}
       

</StyledFriendList>

    
}