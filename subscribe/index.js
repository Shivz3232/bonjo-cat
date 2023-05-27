const { postToResponseURL } = require("./utils/postToResponseURL");
const { saveChannel } = require("./utils/db");

// { "channel_name": "temp", "channel_id": "1234", "response_url": "https://www.google.com"}
exports.handler = async (event) => {
  const channelName = event.channel_name;
  const responseUrl = event.response_url;

  try {
    if (event.channel_id) {
      const channelId = event.channel_id;

      await saveChannel(channelId)

      await postToResponseURL(
        responseUrl,
        channelId,
        `Subscribed to ${channelName}`
      );

      return;
    }
  } catch (e) {
    if (responseUrl && channelName) {
      await postToResponseURL(
        responseUrl,
        channelName,
        `Error: ${JSON.stringify(e)}`
      );
    }

    throw e;
  }
}
