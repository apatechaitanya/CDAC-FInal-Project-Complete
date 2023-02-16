import React from "react";
// import Image from "./Image";
import Image from "./Image";
import img1 from "../../images/Painter.jpg";

// import Painting_img from "./Painting_img"
const Painting = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Painting_img /> */}
<Image service="Painting" img1={img1} />
      {/* <Footer /> */}
    </>
  );
};
export default Painting;
