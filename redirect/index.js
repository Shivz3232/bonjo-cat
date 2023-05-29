const { spotify } = require("./utils/spotify");
const { saveSpotifyRefreshToken } = require("./utils/db");

exports.handler = async (event) => {
  if (event.code) {
    const authData = await spotify.authorizationCodeGrant(event.code);

    await saveSpotifyRefreshToken(authData.body['refresh_token'])
  }

  return;
}