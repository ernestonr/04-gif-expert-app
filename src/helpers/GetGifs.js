export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=SD5EeKg5hDLV6SRcyrl1I6S4h52QXv5G&q=${category}&limit=10`;
    const respuesta= await fetch(url);
    const {data}=await respuesta.json();

    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    });
    return gifs;
}