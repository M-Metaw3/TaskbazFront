import Image from "next/image";
import Box from '@mui/material/Box';
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








import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Home() {
  return (
<>

<Homesection/>
<Homesection2/>
<Homesection3Topservices/>
<Homesection4OurClientsReviws/>
<HomesectionTopProfessional/>
<TopSalonServices/>
<HomeHiring/>
<LatestOrder/>
<Mobilesection/>
<LastSection/>












</>
  );
}
