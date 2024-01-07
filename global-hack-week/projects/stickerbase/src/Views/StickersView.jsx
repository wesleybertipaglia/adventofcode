import React from "react";
import Sticker from "../Components/Sticker";
import stickersData from "../Data/stickers.json";

const StickersView = () => {
  return (
    <div className="grid-container">
      {stickersData.map((sticker, index) => (
        <Sticker
          key={index}
          title={sticker.title}
          description={sticker.description}
          event={sticker.event}
          year={sticker.year}
          image={sticker.image}
        />
      ))}
    </div>
  );
};

export default StickersView;
