/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export const AddCategory=({onNewCategory})=>{

    const [inputValue,setInputValue]=useState('');

    const cambiarValorInput=(event)=>{
        const {target:{value}}=event;
        setInputValue(value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue==undefined || inputValue.trim().length<1){return;}
        //setCategorias((categorias)=>[inputValue,...categorias]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={cambiarValorInput}/>
            </form>
        </>
    );

};