const SpotifyWebApi = require('spotify-web-api-node');

const spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.CLOUD_URL + "/redirect",
});

module.exports = {
  spotify
}