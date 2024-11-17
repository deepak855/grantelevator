// import React, { useState } from "react";
// // import { Box, Grid, IconButton } from "@mui/material";
// import { Grid, Paper, Typography ,Box,IconButton} from '@mui/material';
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import img_1 from "../components/images/photo-16.jpg";


// const images = [
//   img_1,
//   img_1,
//   img_1,
//   img_1,
//   img_1,
//   img_1,
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of visible images
//   const itemsPerPage = 5; // Number of images per page

//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < images.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   };

//   const visibleImages = images.slice(currentIndex, currentIndex + itemsPerPage);

//   return (
//     <>
//      <Grid container spacing={3} columns={12} sx={{ display: 'flex', justifyContent: 'center', border: 'none' }}>
//           <Grid item xs={12} sm={12} md={8} >
//             <Paper sx={{ padding: '20px', border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} elevation={0}>
//               <Typography  className='GrantTitle'>OUR RECENT PROJECTS </Typography>
              
//             </Paper>
//           </Grid>
//         </Grid>
//     <Grid
//      spacing={3} columns={12}
//       container
//       justifyContent="center"
//       alignItems="center"
//       sx={{ width: "100%", padding: 2 }}
//     >
//       <Grid item >
//         {/* Previous Button */}
//         <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
//           <ArrowBackIosNewIcon />
//         </IconButton>
//       </Grid>

//       <Grid item xs={10} md={8} >
//         <Grid
//           container
//           spacing={0}
//           wrap="nowrap"
//           sx={{
//             overflowX: "hidden",
//             display: "flex",
//             justifyContent: "space-between",
//             gap: 0,
//           }}
//         >
//           {visibleImages.map((image, index) => (
//             <Grid
//               item
//               key={index}
//               sx={{
//                 flex: "1 0 calc(20%)", // Ensures 5 images are shown equally (100% / 5)
//                 maxWidth: "20%", // Prevents overflow beyond 5 images in the row
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={image}
//                 alt={`Image ${index}`}
//                 sx={{
//                     maxWidth: "100%",
//                     height: "auto",
//                     borderRadius: "none",
//                     objectFit: "contain",
//                   }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>

//       <Grid item>
//         {/* Next Button */}
//         <IconButton
//           onClick={handleNext}
//           disabled={currentIndex + itemsPerPage >= images.length}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Grid>
//     </Grid>
//     </>
//   );
// };

// export default ImageCarousel;

import { Grid, Paper, Typography ,Box ,Avatar } from '@mui/material';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const clients = [
    { id: 1, name: 'Client A', imageUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Client B', imageUrl: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Client C', imageUrl: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Client D', imageUrl: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Client E', imageUrl: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Client F', imageUrl: 'https://via.placeholder.com/100' },
  ];
export default function TitlebarImageList() {
  return (
    <Grid container spacing={3} columns = {12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item md={8} xs={12} sm={12} >
            <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
            <Typography className='GrantTitle'>OUR RECENT PROJECTS</Typography>
            </Paper>
        </Grid>
        <Grid item md={8} xs={12} sm={12} >
            <Paper sx={{ padding: '0px 20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>   
                <ImageList sx={{ height: 400 }}>
                <ImageListItem key="Subheader" cols={4}>
                    {/* <ListSubheader component="div">OUR RECENT PROJECTS</ListSubheader> */}
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            </Paper>
        </Grid>

        <Grid item md={8} xs={12} sm={12} >
            <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
            <Typography className='GrantTitle'>OUR CLIENTS</Typography>
            </Paper>
        </Grid>
        {/* <Box sx={{ padding: 2 }}> */}
        <Grid item md={8} xs={12} sm={12} >
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
        
        <Grid container spacing={2} justifyContent="center">
          {clients.map((client) => (
            <Grid item xs={6} sm={4} md={3} key={client.id}>
              <Box textAlign="center">
                <Avatar
                  alt={client.name}
                  src={client.imageUrl}
                  sx={{ width: 100, height: 100, marginBottom: 1 }}
                />
                <Typography variant="subtitle2">{client.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    rows: 2,
    cols: 2,
  },
];

