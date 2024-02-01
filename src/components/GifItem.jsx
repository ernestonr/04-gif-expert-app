/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const GifItem=({id,title,url})=>{
    return (
        <>
            <div key={id} className="card">
                <img src={url} alt={title}></img>
                <p>{title}</p>
            </div>
        </>
    );
}