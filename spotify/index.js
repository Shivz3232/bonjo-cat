const { spotify } = require("./utils/spotify");

exports.handler = async (event) => {
  const scopes = [
    "playlist-modify-public"
  ];

  const authUrl = spotify.createAuthorizeURL(scopes);

  return res.redirect(authUrl);
}