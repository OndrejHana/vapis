export type Okres = {
    id: number;
    nazev: string;
    cena: number;
    created_at: string;
    updated_at: string;
};



export type Adresa = {
    id: number;
    okres_id: number;
    okres: Okres;
    ulice: string;
    popisne_cislo: string;
    mesto: string;
    stat: string;
    psc: string;
    created_at?: string;
    updated_at?: string;
};

export type PridatAdresuFormData = {
    mesto: string;
    okres_id: string;
    ulice: string;
    popisne_cislo: string;
    psc: string;
    stat: string;
};



export type DruhFirmy = {
    id: number;
    nazev: string;
    created_at?: string;
    updated_at?: string;
};

export type PridatDruhFirmy = {
    nazev: string;
};



export type Firma = {
    id: number;
    adresa_id?: number;
    druh_firmy_id: number;
    nazev: string;
    email?: string;
    poznamka?: string;
    created_at?: string;
    updated_at?: string;
    // Relationships
    adresa?: Adresa;
    druh_firmy?: DruhFirmy;
};

export type PridatFirmuFormData = {
    nazev: string;
    email: string;
    poznamka: string;
    druh_firmy_id: string;
    adresa_id: string;
    [key: string]: string;
};


