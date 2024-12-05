import { Region } from "./regions";


type Currencies = { name: string, symbol: string, code: string };
type Language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export type Country = {
    name: string;
    nativeName: string;
    flag: {
        png: string;
        svg: string;
    };
    region: Region;
    subregion: string;
    capital: string;
    population: number;
    topLevelDomain: string[];
    currencies: Currencies[];
    languages: Language[];
    borders: string[];
}
export type Info = {
    title: string;
    description: string;
}
export type CountryInfo = {
    img: string;
    name: string;
    info: Info[];
}