import * as React from 'react';
import { Avatar,Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  { useRef, useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import './style.css';

export const MaterialUi = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const boxRef = useRef(null);
 
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: 360, duration: 2 });
   
  }, []);

  return (
    <>


  

      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
      </Stack>

      <AvatarGroup max={4}>
        <Avatar alt="Sharp" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Agnes Walker" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
        <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" />
      </AvatarGroup>


      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad laudantium necessitatibus sequi doloribus tempora voluptatem asperiores? Deserunt sequi eius harum in. Commodi impedit asperiores culpa aliquam! Ab vero quas nihil consequatur hic qui nesciunt eum dolorem reiciendis quidem a deleniti suscipit error corrupti at voluptatum, similique laudantium! Ex, quasi.</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptas nihil doloremque, animi velit tenetur, quidem illo commodi iusto officiis eum sapiente quia ipsa rem veritatis aliquid pariatur ea non sequi! Fugit quae quo corporis eligendi dolorem minima explicabo quibusdam mollitia quos necessitatibus distinctio iste sunt, soluta, tenetur laboriosam.</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptas nihil doloremque, animi velit tenetur, quidem illo commodi iusto officiis eum sapiente quia ipsa rem veritatis aliquid pariatur ea non sequi! Fugit quae quo corporis eligendi dolorem minima explicabo quibusdam mollitia quos necessitatibus distinctio iste sunt, soluta, tenetur laboriosam.</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptas nihil doloremque, animi velit tenetur, quidem illo commodi iusto officiis eum sapiente quia ipsa rem veritatis aliquid pariatur ea non sequi! Fugit quae quo corporis eligendi dolorem minima explicabo quibusdam mollitia quos necessitatibus distinctio iste sunt, soluta, tenetur laboriosam.</Item>
        </Grid>
      </Grid>
    </Box>

    <Stack 
    spacing={{ xs: 1, sm: 2, md: 4 }} // Responsive spacing
      direction={{ xs: 'column', md: 'row' }} // Responsive direction
      divider={<Divider orientation="vertical" flexItem />} // Divider
     >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      
      <br />
    <Box>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper2"
      >
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.ZlAo-TiJWZGcjXTq2Z54eQHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.UYagQDMo7CCbBLXOPB5etAHaHa?rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>
         </Swiper>
  
         </Box>

         <Box id="box">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>


         </Box>

         <Grid container  direction={{ xs: 'column', sm: 'row' }}  spacing={2} sx={{display:"grid", 
         gridTemplateColumns:'repeat(3,1fr)',
         

         }}>
  <Grid xs={10}  >
    <Item>xs=8</Item>
    
  </Grid>
  <Grid xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>


<Grid container spacing={2} 
  direction={{ xs: 'column', sm: 'row' }}
  

>
  <Grid item xs={12} sm={6}>
    <Item>Item 1</Item>
  

  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 2</Item>
    
  </Grid>

  <Grid item xs={12} sm={6}>
    <Item>Item 1</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 2</Item>
    
    
  </Grid>

  <Grid item xs={12} sm={6}>
    <Item>Item 1</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 2</Item>
    
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 1</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 2</Item>
    
  </Grid>


</Grid>


<Grid 
  container 
  spacing={2} 
  direction={{ xs: 'column', sm: 'row' }} // Column direction on xs, row direction on sm and up
>
  {/* Each item will take full width (xs={12}) on extra-small screens, 
      and one-third width (sm={4}) on small screens and up */}
  <Grid item xs={12} sm={6}>
    <Item>Item 1</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 2</Item>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Item>Item 3</Item>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Item>Item 4</Item>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Item>Item 5</Item>
  </Grid>
  <Grid item xs={12} sm={12}>
    <Item>Item 6</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 7</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 8</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 8</Item>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Item>Item 8</Item>
  </Grid>
  <Grid item xs={12} sm={10}>
    <Item>Item 8</Item>
  </Grid>
  <Grid item xs={12} sm={2}>
    <Item>Item 8</Item>
  </Grid>


</Grid>

<Box 
  display="flex" 
  justifyContent="center" 
  alignItems="center" 
  flexDirection="row" 
  gap={2}
>
  <Typography bgcolor={"blue"} variant='body2'> Item 1</Typography>

 
  <Box p={2} bgcolor="secondary.main">
    Item 2
  </Box>
  <Box p={2} bgcolor="error.main">
    Item 3
  </Box>
</Box>
<div>
      <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
        Animate me!
      </div>
    </div>





    </>
  );
};
