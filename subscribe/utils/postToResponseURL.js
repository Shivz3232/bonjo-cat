const axios = require("axios");

const postToResponseURL = async (
  url,
  channelName,
  msg
) => {
  await axios.post(url, {
    channel: channelName,
    blocks: [
      {
        type: "section",
        text: { type: "mrkdwn", text: msg },
      },
    ],
  });
};

module.exports = {
  postToResponseURL
}