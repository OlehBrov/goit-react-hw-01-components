import FriendListItem from "./FriendListItem"
export const FriendList = (props) => {
    return <ul className="friend-list">
        {props.data.map(prop => 
        (<FriendListItem
            key={prop.id}
            onStatus={prop.isOnline}
            avatar={prop.avatar}
            friendName={prop.name}
        />)
            )}
       

</ul>

    
}