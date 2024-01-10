import { useEffect, useState } from "react"

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ]

const Header = () => {
    return (
         <div>
            <header style = {{backgroundColor: "black", color: "white", margin: "0px", textAlign: "center", padding: "10px"}}>
                <h2>Image Viewer</h2>    
            </header>
         </div>
     )
 }

const Footer = () => {
    return (
        <div>
            <ul>
                <li>Abous Us</li>
                <li>Contact Us</li>
                <li>Email</li>
            </ul>
        </div>
    )
}


function ImageViewer() { 
    const [imgIndex, setImgIndex] = useState(0) 
    
    const PreviousImage = () => {
        setImgIndex(imgIndex == 0 ? images.length - 1 : imgIndex -1)
    }
    
    const NextImage = () => {
        setImgIndex(imgIndex == images.length -1 ? 0 : imgIndex + 1 )
    }

    useEffect(() => {
        let test = setTimeout (() => {
            setImgIndex(imgIndex == images.length -1 ? 0 : imgIndex + 1 )
        }, 5000)
        return () => {
            clearTimeout(test)
        }
    }, [imgIndex])
  
    return (
        <div>
            <Header/>
            <div style = {{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row",
            marginTop: "7%"}}>
            <button onClick = {PreviousImage} style={{backgroundColor: "black", color: "white", borderRadius: "50%",
             padding: "10px 20px"}}>&lt;</button>
            <img style = {{height: "80vh", width: "80vw"}} src = {images[imgIndex]}></img>
            <button onClick = {NextImage} style={{backgroundColor: "black", color: "white", borderRadius: "50%",
             padding: "10px 20px"}}>&gt;</button>        


                {/* <button onClick = {() => PreviousImage(setImgIndex, imgIndex)} disabled = {imgIndex == 0 ? true : false }>A</button>
                <img src = {images[imgIndex]}></img>
                <button onClick = {() => NextImage(setImgIndex, imgIndex)} disabled = {imgIndex == (images.length - 1) ? true : false}>B</button>         */}
            </div>
            <Footer/>
        </div>
    )
}

export default ImageViewer