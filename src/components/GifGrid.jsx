/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid=({category})=>{

    const {imagenes,isLoading}=useFetchGifs(category);

    return (<>
                <div>
                    <h3>{category}</h3>
                    {
                        isLoading && (<h2>Cargando...</h2>)
                    }
                    <div className='card-grid'> {/*TIENE QUE SER CLASNAME DEBIDO A QUE JS CLASS ES UNA PALABRA RESERVADA HACIENDO REFERENCIA A LA CLASE*/}
                        {
                            imagenes.map((images)=>{
                                return <GifItem  {...images} key={images.id}></GifItem>
                            })
                        }
                    </div>
                </div>
            </>);
}