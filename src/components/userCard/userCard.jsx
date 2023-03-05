
import {StyledProfile, StyledList} from './userCard.styled'

export const Profile = props => {
  return (
    <StyledProfile className="profile">
      <div className="description">
        <img src={props.avatar} alt={props.username} className="avatar" />
        <p className="name">{props.username}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      <StyledList className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{ props.stats.followers.toLocaleString()}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views.toLocaleString()}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes.toLocaleString()}</span>
        </li>
      </StyledList>
    </StyledProfile>
  );
};
