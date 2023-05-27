exports.handler = async(event) => {
  // For setting up new event listeners for Slack bots
  if (event.challenge) {
    const response = { challenge: event.challenge };

    return response;
  }

  return;
};
