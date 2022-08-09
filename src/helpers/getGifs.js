

 export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4c5ogCI74qs0fuS2TLj8K2YOZ2uzfB7F&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const {data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    return gifs;

}
