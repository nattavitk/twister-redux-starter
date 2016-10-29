import { FETCH_TWEETS_SUCCESS } from './types'

const fetchTweetSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets },
})

const fetchTweets = username => (dispatch) => {
  const uri = `http://localhost:3000/api/Tweets?filter={"where":{"username":"${username}"}}`

  fetch(uri)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(tweets => dispatch(fetchTweetSuccess(tweets)))
    .catch(err => console.error(err))
}

export {
  fetchTweets,
}
