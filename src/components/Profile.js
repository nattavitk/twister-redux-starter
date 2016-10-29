import React, { PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

const Profile = (props) => {
  const toggleFollow = () => {}

  const showProfileFollow = props.isOwnProfile ? '' :
    <ProfileFollow
      isFollowing={props.isFollowing}
      handleToggleFollow={toggleFollow}
    />

  return (
    <div className="profile">
      <ProfileHeader name={props.name} username={props.username} />
      <ProfileDetail
        numTweets={props.numTweets}
        numFollowers={props.numFollowers}
        numFollowings={props.numFollowings}
      />
      { showProfileFollow }
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
}

export default Profile
