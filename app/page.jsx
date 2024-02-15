import Image from "next/image";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Homesection from "@/components/homesections/Homesection";
import Homesection2 from "@/components/homesections/Homesection2";
import Homesection3Topservices from "@/components/homesections/Homesection3Topservices";
import  Homesection4OurClientsReviws from "@/components/homesections/Homesection4OurClientsReviws";
import  HomesectionTopProfessional from "@/components/homesections/HomesectionTopProfessional";
import  TopSalonServices from "@/components/homesections/TopSalonServices";
import  HomeHiring from "@/components/homesections/HomeHiring";
import  LatestOrder from "@/components/homesections/LatestOrder";
import  Mobilesection from "@/components/homesections/Mobilesection";
import  LastSection from "@/components/homesections/LastSection";


import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';






import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>
<Box  p={"20px"} w={"100%"} mx={"auto"} my={"40px"}>
<Box   w={"90%"}  mx={"auto"}   my={"40px"}>

<Homesection/>
</Box >
<Box   mx={"auto"}   w={"90%"}  my={"40px"}>

<Homesection2/>
</Box>
<Box   mx={"auto"}  w={"90%"}  my={"40px"}>

<Homesection3Topservices/>
</Box >

<Box      w={"100%"}  my={"40px"}>

<Homesection4OurClientsReviws />
</Box >
<Box   mx={"auto"}   w={"90%"}  my={"40px"}>

<HomesectionTopProfessional/>
</Box >
<Box    mx={"auto"}  w={"90%"}  my={"40px"}>

<TopSalonServices/>
</Box >
<Box  mx={"auto"}   w={"90%"}  my={"40px"}>

<HomeHiring/>
</Box >
<Box   mx={"auto"}  w={"90%"} my={"40px"}>

<LatestOrder/>
</Box >
<Box  mx={"auto"}    w={"90%"} my={"40px"}>

<Mobilesection/>
</Box >

<Box   w={"90%"} mx={"auto"} my={"40px"}>

<LastSection/>
</Box >

</Box>











</>
  );
}
