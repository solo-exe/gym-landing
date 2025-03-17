import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import Benefit from "./Benefit";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus doloribus iste recusandae autem modi aliquam dolore nobis molestias vel ratione distinctio incidunt neque consectetur dolorem obcaecati perspiciatis corrupti quae.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit sint iste earum quaerat voluptatem consectetur et non. Quo fugiat quaerat aut quasi adipisci explicabo sed placeat repellat, possimus aliquid?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus doloribus iste recusandae autem modi aliquam dolore nobis molestias vel ratione distinctio incidunt neque consectetur dolorem obcaecati perspiciatis corrupti quae.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // make the animation trigger on the children one after the other
  },
};

const motionDivBenefitsChildrenProps = {
  initial: "hidden", // KEYWORD for initial state
  whileInView: "visible", // KEYWORD for final state
  viewport: {
    once: true, // Should run once
    amount: 0.5, // How much of the element should be show before the animation triggers
  },
  //   transition: {
  //     duration: 0.5, // How long the animation takes
  //   },
  variants: { container },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  setSelectedPage;

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      // {...motionDivBenefitsProps}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          // {...motionDivBenefitsChildrenProps}
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                // setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
