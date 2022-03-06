import { useState } from "react";
import Images from "./Images";
import classes from "./SneakersHero.module.css";

const SneakersHero = () => {
  const [selectedImage, setSelectedImage] = useState(Images[0]);

  return (
    <div className={classes["hero-wrapper"]}>
      <img src={selectedImage} alt="images" className={classes["image-hero"]} />

      <ul className={classes["list-sneakers"]}>
        {Images.map((image, index) => (
          <li
            key={index}
            style={{ opacity: selectedImage === image ? "0.4" : "" }}
          >
            <img
              style={{
                border:
                  selectedImage === image ? "4px solid hsl(26, 100%, 55%)" : "",
              }}
              src={image}
              alt="thumbnail"
              onClick={() => setSelectedImage(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SneakersHero;
