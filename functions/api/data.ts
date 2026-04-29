
export const onRequest = async () => {
  const cities = ["Dallas","Houston","Austin","Fort Worth"];

  const feed = Array.from({length:5}).map(() => ({
    city: cities[Math.floor(Math.random()*cities.length)],
    minutes: Math.floor(Math.random()*10)+1
  }));

  return new Response(JSON.stringify({
    count: Math.floor(Math.random()*5)+3,
    feed
  }), {
    headers: { "content-type": "application/json" }
  });
};
