import React from 'react';

    function GifList({imagesUrls}){

        return (
            <div>
                <ul>
                        {imagesUrls.map((url,index)=>{
                            return <li key={"img_"+index}>
                                <img src={url} alt="gif" />
                            </li>
                        })}
                </ul>
            </div>
        )
    }

export default GifList
