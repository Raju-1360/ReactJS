import { Container, Typography,Box } from "@mui/material"
import { useEffect, useRef } from "react"
import { gsap } from 'gsap';


import "./style.css"

export const Gsap=()=>{
    const coding =useRef(null)
    const head =useRef(null)
    const dev= useRef(null)
    const time= gsap.timeline()
    useEffect(()=>{
      
       time.to(coding.current, {
            x: 500,
            delay: 1,
            rotate: 360,
            backgroundColor: "pink",
            repeat: -1, // -1 for infinite
            yoyo: true,
            duration: 2,
            scale: 1.5,
            ease: "elastic.out(1, 0.3)"
          });

    },[])

useEffect(()=>{
    time.to(".head",
        {y:-50,
            stagger: 1, // Adjust stagger for delay between animations
         // Infinite repeat
      yoyo: true,   // Ping-pong effect
      opacity: 0, // Fade effect
      duration: 1,

    

    })
 


},[])
useEffect(()=>{
    time.to(dev.current,{
        rotate:180,
        scale:0.5,
        repeat:-1,
        yoyo:true

    })

},[])

useEffect(()=>{
    time.to(".boxes",{
        rotate:45,
        scale:0.1,
        stagger: 1, // Adjust stagger for delay between animations
   repeat: -1,   // Infinite repeat
   yoyo: true,   // Ping-pong effect
   opacity: 0, // Fade effect
   duration: 1,
  



})

   },[])

    return(
        <>

        <Container>
            <Typography ref={coding} variant="h2">Hello world its me</Typography>
            <Typography className="head"  variant="body1">Heading one</Typography>
            <Typography  className="head"    variant="body1">Heading one</Typography>
            <Typography  className="head"   variant="body1">Heading one</Typography>


        </Container>

        <Box className="box">
            <Box className="boxes" ></Box>
            <Box  className="boxes" ></Box>
            <Box  className="boxes" ></Box>
            <Box className="boxes"  >   </Box>



        </Box>
        <Typography  ref={dev}variant="h3"> Coding </Typography>
        
        
        </>


    )
}