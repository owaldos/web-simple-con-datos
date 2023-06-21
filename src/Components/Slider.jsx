import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MySlider = styled.img`

width:100%;

object-fit:cover;

opacity:0;
transition: 1s;
&.loaded{
    opacity:1;
}
`;



// autoplay:booleans,images: [],interval:number,button:booleans

const Slider = ({autoPlay,intervalImg,buttons,images}) => {
   
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImage, setSelectedImage]= useState(images[0])
    const [loaded, setLoaded]= useState(false)


    useEffect(() => {
        if (autoPlay||!buttons){

            const interval = setInterval(() =>{
              selectNewImage(selectedIndex, images)
            }, intervalImg || 1000 )
          
            return () => {
              clearInterval(interval)
            }
        }
    })
    

    const selectNewImage =(next=true)=>{
            
            setLoaded(false)
            setTimeout(() => {
                const condition = next? selectedIndex<images.length-1:selectedIndex>0
                const nextIndex = next?(condition?selectedIndex+1:0):condition? selectedIndex-1: images.length-1
                setSelectedImage(images[nextIndex])
                setSelectedIndex(nextIndex)
            }, 500);
       
    }

   
  return (
    <div style={{display: 'flex', flexDirection:'column',justifyContent: 'center'  }}>
        <div   style={{display: 'flex',justifyContent: 'center'  }}>
            <MySlider src={require(`../images/${selectedImage}`)} alt='imagenes de slider' className={loaded? 'loaded' : ''} onLoad={()=> setLoaded(true)} />
        </div>
        { buttons&&

            <div  style={{display: 'flex',justifyContent: 'center'  }}>

                <button onClick={()=>selectNewImage(false)}>{'<'}</button>
                <button onClick={selectNewImage}>{'>'}</button>
            </div>
        }
  
    </div>
  )
}

export default Slider