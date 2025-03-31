// import { SelectedPage } from "@/shared/types";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { JSX } from "react";

type Props = {
  key: string;
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefit({ icon, title, description }: Props) {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1 },
      }}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    </motion.div>
  );
}

export default Benefit;
