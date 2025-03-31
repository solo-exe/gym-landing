import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionButton from "../ActionButton";

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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
          viewport={{ amount: 0.5, once: true }}
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
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        {/* GRAPHICAS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:flex md:mt-28">
          {/* GRAPHIC */}
          <img src={BenefitsPageGraphic} alt="benefitsPageGraphic" />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative mt-20 md:mt-0">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* BODY */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis veritatis, magni aspernatur nulla pariatur labore,
                voluptatum deleniti eius ducimus eveniet qui! Eveniet, obcaecati
                et! Commodi enim veritatis tempore aliquam illum. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Mollitia commodi
                quisquam, officiis perferendis, unde reprehenderit at aliquid
                velit aut asperiores repellat ullam facilis assumenda soluta
                facere, optio nulla inventore pariatur.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia commodi quisquam, officiis perferendis, unde
                reprehenderit.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative">
              <div className="before:absolute before:-bottom-20 before:right-40 before:content-sparkles before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
