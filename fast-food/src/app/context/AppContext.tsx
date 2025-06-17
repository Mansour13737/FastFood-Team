'use client'


import { createContext } from "react";

type obg = {
    id: number,
    title: string,
    img: string;
}

type jsn = {
    id: number,
    title: string,
    description: string,
    price: number,
    star: number,
    image: string,
}

interface MyAppContext {
    customStaff: obg[];
    customStaff2: obg[];
    products : jsn[];
    inputVal : number;
    setInputVal : (item : number) => void;
}

export const AppContext = createContext({} as MyAppContext)

