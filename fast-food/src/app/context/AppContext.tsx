'use client'


import { createContext, Dispatch, MouseEventHandler, SetStateAction } from "react";

type obg = {
    id: number;
    title: string;
    img: string;
}

type jsn = {
    id: number;
    title: string;
    description: string;
    price: number;
    star: number;
    image: string;
    isLiked : boolean;
    category: string;
}

interface MyAppContext {
    customStaff: obg[];
    customStaff2: obg[];
    products : jsn[];
    inputVal : number;
    setInputVal : (item : number) => void;
    visaActive : boolean;
    setVisaActive : Dispatch<SetStateAction<boolean>>;
    masterActive : boolean;
    setMasterActive : Dispatch<SetStateAction<boolean>>;
    qtyNumber : number;
    setQtyNumber : Dispatch<SetStateAction<number>>;
    setId : Dispatch<SetStateAction<number | undefined>>;
    finalPrice : number | undefined;
    setFinalPrice : Dispatch<SetStateAction<number | undefined>>;
    id: number|undefined;
    fixPrice : () => void;
    handleLike :(info: jsn) => undefined 
    liked : string;
    setLiked : Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as MyAppContext)

