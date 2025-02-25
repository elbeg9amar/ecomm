import React from 'react'

function Thumb({images, tab, myRef}) {
    return (
        <div className="thumb" ref={myRef}>
        {
            images.map((img, index) =>(
                <img src={img} alt="" key={index} 
                onClick={() => tab(index)}
                />
            ))
        }
        </div>
    )
}

export default Thumb;
