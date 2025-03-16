import { SelectedPage } from "@/shared/types";
type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};
declare const Navbar: ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => import("react/jsx-runtime").JSX.Element;
export default Navbar;
