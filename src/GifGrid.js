import { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // declarar constante y metodo set
    const [images, setImages] = useState([]);

    // metodo que solo carga una vez al iniciar el sistema
    useEffect(() => {
        getFigs();
    }, [])

    // metodo para obtener imagenes de aplicacion de terceros (giphy)
    const getFigs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZKIuEzmGSPpk5A84BXZAx3k7d9wJIHCu`;
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        // metodo que modifica el objeto con los valores deseados
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        // asigana valor a constante images
        setImages(gifs);
    }

    return (
        <>
            <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map(e => (
                        <GifGridItem
                            key={e.id}
                            {...e}
                        />
                    ))
                }
            </div>
        </>
    )
}
