import { Firma } from "./Firma";

export type NazvyStavuKamionu = "objednávka" | "příprava" | "s dopravou" | "s spz" | "naloženo" | "vyfakturováno" | "zrušeno"

export type StavyKamionu = {
    id: number;
    nazev: NazvyStavuKamionu;
    created_at?: string;
    updated_at?: string;
}

export type Kontakt = {
    id: number;
    jmeno: string;
    prijmeni: string;
    tel: string;
    email: string;
    created_at?: string;
    updated_at?: string;

}

export type Kamion = {
    id: number;
    stav_id: number;
    stav: StavyKamionu;
    kontaktni_osoba_id: number
    kontaktni_osoba: Kontakt;
    ridic_id: number;
    ridic: Kontakt;
    dopravce_id: number;
    dopravce: Firma;
    druh_kamionu_id: number;
    cena_dopravy: number;
    spz: string;
    created_at?: string;
    updated_at?: string;

}

