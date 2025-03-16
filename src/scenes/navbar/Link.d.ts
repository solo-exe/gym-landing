import { SelectedPage, SelectedPageKey } from "@/shared/types";
type Props = {
    page: SelectedPageKey;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};
declare function Link({ page, selectedPage, setSelectedPage }: Props): import("react/jsx-runtime").JSX.Element;
export default Link;
