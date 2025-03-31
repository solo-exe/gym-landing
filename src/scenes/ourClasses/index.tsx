import { motion } from "framer-motion";

import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { ClassType } from "@/shared/types";
import Class from "./Class";

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima praesentium nesciunt dolorem.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = (props: Props) => {
  const { setSelectedPage } = props;
  return (
    <section id="ourClasses" className="w-full bg-primary-100 my-40 py-40 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage["Our Classes"])}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden" // KEYWORD for initial state
          whileInView="visible" // KEYWORD for final state
          viewport={{
            once: true, // Should run once
            amount: 0.5, // How much of the element should be show before the animation triggers
          }}
          transition={{
            duration: 0.5, // How long the animation takes
            delay: 0.2,
          }}
          variants={{
            hidden: {
              opacity: 0, // transparency index of 0 i.e is transparent
              x: -100, // initial position on the x-axis
            }, // Specify details for keywords used in "initial" state
            visible: {
              opacity: 1, // transparency index of i.e is very opaque
              x: 0, // final position on the x-axis
            }, // Specify details for keywords used in "whileInView" state
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              architecto omnis, ipsam repellendus at natus adipisci excepturi
              accusamus doloribus! Numquam eaque voluptates provident quisquam
              tenetur odio tempora, ipsam nisi soluta.
            </p>
          </div>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class key={`${item.name}-${index}`} classInfo={item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
