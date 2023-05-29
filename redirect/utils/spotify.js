const SpotifyWebApi = require('spotify-web-api-node');

const spotify = new SpotifyWebApi({
  clientId: params.SPOTIFY_CLIENT_ID,
  clientSecret: params.SPOTIFY_SECRET,
  redirectUri: params.CLOUD_URL + "/redirect",
});

module.exports = {
  spotify
}