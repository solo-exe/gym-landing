import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "../ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// const motionDivHeaderProps = {
//   initial: "hidden", // KEYWORD for initial state
//   whileInView: "visible", // KEYWORD for final state
//   viewport: {
//     once: true, // Should run once
//     amount: 0.5, // How much of the element should be show before the animation triggers
//   },
//   transition: {
//     duration: 0.5, // How long the animation takes
//   },
//   variants: {
//     hidden: {
//       opacity: 0, // transparency index of 0 i.e is transparent
//       x: -100, // initial position on the x-axis
//     }, // Specify details for keywords used in "initial" state
//     visible: {
//       opacity: 1, // transparency index of i.e is very opaque
//       x: 0, // final position on the x-axis
//     }, // Specify details for keywords used in "whileInView" state
//   },
// };

// const motionDivActionProps = {
//   ...motionDivHeaderProps,
//   transition: {
//     ...motionDivHeaderProps.transition,
//     delay: 0.2, // Adds a delay relative to the elements without a motion delay
//   },
// };

const Home = ({ setSelectedPage }: Props) => {
  // const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className={`${isAboveMediumScreens ? "flex h-5/6" : ""} mx-auto w-5/6 items-center justify-between`}
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
        // onViewportLeave={() => {
        //   setSelectedPage(SelectedPage.Benefits);
        // }}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden" // KEYWORD for initial state
            whileInView="visible" // KEYWORD for final state
            viewport={{
              once: true, // Should run once
              amount: 0.5, // How much of the element should be show before the animation triggers
            }}
            transition={{
              duration: 0.5, // How long the animation takes
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
            // {...motionDivHeaderProps}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-small text-start ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className={`flex mt-8 items-center gap-9`}
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
            // {...motionDivActionProps}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage["Contact Us"])}
              href={`#${SelectedPage["Contact Us"]}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img src={HomePageGraphic} alt="homePageGraphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className={`h-[150px] w-full bg-primary-100 py-10`}>
          <div className={`mx-auto w-5/6`}>
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
