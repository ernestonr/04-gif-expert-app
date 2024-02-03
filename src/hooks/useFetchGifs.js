/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

    const [imagesState,setImages]=useState([]);
    const [loading,isLoading]=useState(true);

    const getImages=async()=>{
        const imagenes= await getGifs(category);
        setImages(imagenes);
        isLoading(false);
    }

    useEffect(
        ()=>{   
            getImages();
        },[]);
    
    return {
        imagenes:imagesState,
        isLoading:loading
    }
}
