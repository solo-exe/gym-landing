import { SelectedPage } from "@/shared/types";
import { JSX } from "react";
type Props = {
    key: string;
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};
declare function Benefit({ icon, title, description, setSelectedPage }: Props): import("react/jsx-runtime").JSX.Element;
export default Benefit;
