import { ProfileCard,Description, Avatar, UserName, UserTag, UserLocation, Stats,StatsItem, Label,Quantity } from "./ProfileCard.styled"

export const Profile = ( {username,tag,location,avatar,stats} ) => {
 
    
    return <ProfileCard>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity >{ stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </StatsItem>
  </Stats>
</ProfileCard>
}