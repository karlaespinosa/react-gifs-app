export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cUxfm3oT7quIfXLHv6ia5pMXVr3B6QI0`;
  const res = await fetch(url);
  const { data } = await res.json();
  
  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images?.downsized_medium.url
  }));

  return gifs;
}