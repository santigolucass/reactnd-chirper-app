import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render(){
    const { tweet } = this.props

    if(tweet == null){
      return <p> This tweet doesn't exist</p>
    }

    return(
      <div className='tweet'>TWEET ID: <b>{this.props.id}</b></div>
    )
  }
}

function mapStateToProps({tweets, users, authedUser}, { id }){
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
    ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    : null
  }
}

export default connect(mapStateToProps)(Tweet)
