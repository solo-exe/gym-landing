import { SelectedPage } from "@/shared/types";
import React from "react";
type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};
declare const ActionButton: ({ children, setSelectedPage }: Props) => import("react/jsx-runtime").JSX.Element;
export default ActionButton;
