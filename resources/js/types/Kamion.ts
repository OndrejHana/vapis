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

export type PridatKontaktFormData = {
    jmeno: string;
    prijmeni: string;
    tel: string;
    email: string;
}

export type DruhKamionu = {
    id: number;
    nazev: string;
    delka: number;
    nosnost: number;
    poznamka: string;
    created_at: string;
    updated_at: string;
}

export type Stavba = {
    id: number;
    nazev: string;
    cislo_objednavky: string;
    konecne_datum: string;
    planovany_pocet_kamionu: number;
    poznamka: string;
    kontaktni_osoba_id: number;
    adresa_id: number;
    stav_id: number;
    vychozi_druh_kamionu_id: number;
    stavebni_firma_id: number;
    created_at: string;
    updated_at: string;
}

export type Kamion = {
    id: number;
    stav_id: number;
    stav: StavyKamionu;
    datum_nakladky: string;
    kontaktni_osoba_id: number
    kontaktni_osoba: Kontakt;
    ridic_id: number;
    ridic: Kontakt;
    dopravce_id: number;
    dopravce: Firma;
    druh_kamionu_id: number;
    cena_dopravy: number;
    spz: string;
    stavby_id: number;
    stavby: Stavba;
    created_at?: string;
    updated_at?: string;
}

export type PridatKamionFormData = {
    stav_id: string;
    stavba_id: string;
    datum_nakladky: Date;
    spz: string;
    cena_dopravy: number;
    druh_kamionu_id: string;
    kontaktni_osoba_id: string;
    ridic_id: string;
    dopravce_id: string;
}


