// import React, { useState } from "react";

// export default function Carousel() {
//   const [index, setIndex] = useState(0);
//   const content = [
//     {
//       id: 1,
//       image: "logo.png",
//       description: "This is the content for item 1",
//     },
//     {
//       id: 2,
//       image: "priceLogo.svg",
//       description: "This is the content for item 2",
//     },
//     {
//       id: 1,
//       image: "vite.svg",
//       description: "This is the content for item 3",
//     },
//   ];

//   const length = content.length;

//   const handlePrevious = () => {
//     const newIndex = index - 1;
//     setIndex(newIndex < 0 ? length - 1 : newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = index + 1;
//     setIndex(newIndex >= length ? 0 : newIndex);
//   };
//   return <div></div>;
// }
