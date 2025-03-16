import { JSX } from "react";
export declare enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    'Our Classes' = "ourClasses",
    'Contact Us' = "contactUs"
}
export type SelectedPageKey = keyof typeof SelectedPage;
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
