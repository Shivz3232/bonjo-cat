const { getChannel, saveTrackId } = require("./utils/db");

exports.handler = async(event) => {
  // For setting up new event listeners for Slack bots
  if (event.challenge) {
    const response = { challenge: event.challenge };

    return response;
  }

  const channelId = event.event.channel;

  const channel = await getChannel(channelId);

  if (!channel) {
    return;
  }

  if (channelId && event.event.text) {
    const msg = event.event.text;
    const msgParts = msg.split("\n");

    const spotifyLinks = msgParts.filter((p) =>
      p.includes("open.spotify.com/track")
    );

    for (const spotifyLink of spotifyLinks) {
      let trackId = spotifyLink.split("/")[4];

      if (trackId.includes("?")) {
        trackId = trackId.split("?")[0];
      }

      const spotifyTrackId = `spotify:track:${trackId}`;

      await saveTrackId(spotifyTrackId);
    }
  }

  return;
};
