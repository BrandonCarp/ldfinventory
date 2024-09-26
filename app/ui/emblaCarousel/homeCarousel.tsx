import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import ldf1 from "../images/1.jpeg";
import ldf2 from "../images/2.jpeg";
import ldf3 from "../images/3.jpg";
import ldf4 from "../images/4.jpg";
import ldf5 from "../images/5.jpg";
import ldf6 from "../images/6.png";
import ldf7 from "../images/7.png";
import ldf9 from "../images/9.png";


export default function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const images = [ldf1, ldf2, ldf3, ldf4, ldf5, ldf6, ldf7, ldf9];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex ">
        {images.map((image, index) => (
          <Image
            key={index}
            className="flex-[0_0_100%] min-w-0 "
            src={image}
            alt={`Slide ${index + 1}`}

            sizes="(max-width: 600px) 50vw, 50vw"
            width={50}
            height={50}

          />
        ))}
      </div>
    </div>
  );
}

// ç
