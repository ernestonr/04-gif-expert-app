/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp=()=>{

   const [categorias,setCategorias]= useState(['Dragon Ball Z']);

   const onAddCategory=(newCategory)=>{
       if(categorias.includes(newCategory)){return;}

        setCategorias(categorias=>{
            return [...categorias,newCategory];
        });
   }

    return (
        <>
           <h1>GifExpertApp</h1>

           <AddCategory 
                //setCategorias={setCategorias}
                onNewCategory={onAddCategory}
                ></AddCategory>

            { 
                categorias.map( category=>{
                    return <GifGrid category={category} key={category}/>
                }) 
            } 
        </>
    );
}