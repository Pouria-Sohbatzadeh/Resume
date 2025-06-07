import React from "react";

// Components
import Trusting from "./ArtistSeekingComponent/Trusting";
import ArtistOffers from "./ArtistSeekingComponent/ArtistOffers";

export default function ArtistSeeking() {
  // The imgs of artist
  const artistImgs = [
    {
      imgSize: "lg:w-[48px]",
      address: "/img/artists/artist1.png",
      alt: "Mr Artist",
      className: "ml-[-10px]",
    },
    {
      imgSize: "lg:w-[48px]",
      address: "/img/artists/artist2.png",
      alt: "Mr Artist",
    },
    {
      imgSize: "lg:w-[48px]",
      address: "/img/artists/artist3.png",
      alt: "Mr Artist",
      className: "mr-[-10px]",
    },
  ];

  const offersData = [
    {
      imgSize: "lg:w-[40px]",
      address: "img/offersIcon/offer1.png",
      alt: "Offers Icon (Mentoring)",
      Num: "2000",
      Txt: "مشاور و منتور"
       
    },
    {
      imgSize: "lg:w-[40px]",
      address: "img/offersIcon/offer2.png",
      alt: "Offers Icon (Trip)",
      Num: "200",
      Txt: "اردو برگزار شده"
       
    },
    {
      imgSize: "lg:w-[40px]",
      address: "img/offersIcon/offer3.png",
      alt: "Offers Icon (Wbinar)",
      Num: "1000",
      Txt: "وبینار برگزار شده"
       
    },
    
  ]
  return (
    <section
      className="custom_container pr-[40px] pl-[60px] w-full lg:h-[218px] bg-white mt-[40px]
    flex justify-between items-center"
    >
      {/* Right */}

      <Trusting artistImgs={artistImgs} />

      {/* Left */}
      <ArtistOffers offersData={offersData}/>
    </section>
  );
}
