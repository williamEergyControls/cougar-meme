export const onRequest = async () => {
  const hooks = [
    "I checked cougars near me in Texas",
    "DO NOT search cougars near you",
    "This was a mistake",
    "I regret checking this"
  ];

  const trends = [
    "yoga session detected",
    "coffee break spotted",
    "night hunt mode",
    "gym activity spike"
  ];

  const scripts = Array.from({length:100}).map(() => {
    return {
      text: `${hooks[Math.floor(Math.random()*hooks.length)]}... ${trends[Math.floor(Math.random()*trends.length)]} 💀`
    };
  });

  return new Response(JSON.stringify(scripts), {
    headers: { "content-type": "application/json" }
  });
};
