import React, { PropTypes, Component } from 'react'
import Tweet from './Tweet'

class TweetList extends Component {
  componentDidMount() {
    const ownerUsername = this.props.ownerUsername || 'kaizerwing'

    this.props.fetchTweets(ownerUsername)
  }
  render() {
    return (
      <div className={'tweet-list'}>
        {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  fetchTweetSuccess: PropTypes.func,
}
TweetList.defaultProps = {
  tweets: [],
}
export default TweetList
