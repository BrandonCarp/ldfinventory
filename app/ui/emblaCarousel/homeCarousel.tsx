import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import ldf1 from "../images/1.jpg";
import ldf2 from "../images/2.jpg";
import ldf3 from "../images/3.jpg";

export default function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const images = [ldf1, ldf2, ldf3];
  return (
    <div className=" overflow-hidden bg-white  " ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <Image
            key={index}
            className="flex-[0_0_100%] min-w-0"
            src={image}
            alt={`Slide ${index + 1}`}
            width={150}
            // height={250} // Adjust this to your desired height
          />
        ))}
      </div>
    </div>
  );
}

// ç
