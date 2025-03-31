import { JSX } from "react";

export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    'Our Classes' = 'ourClasses',
    'Contact Us' = 'contactUs',
}
export type SelectedPageKey = keyof typeof SelectedPage;

export interface BenefitType {
    icon: JSX.Element; // Or JSX.Element, depending on exact usage
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description: string;
    image: string;
}
