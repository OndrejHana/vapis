import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

import FirmaLayout from "@/layouts/firmy/layout";

import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import {
    Adresa,
    DruhFirmy,
    Okres,
    PridatAdresuFormData,
    PridatDruhFirmy,
    PridatFirmuFormData,
} from "@/types/Firma";
import PridatDruhFirmySheet from "@/components/sheets/PridatDruhFirmySheet";
import PridatFirmuForm from "@/components/firmy/PridatFirmuForm";
import PridatAdresuSheet from "@/components/sheets/PridatAdresuSheet";
import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přidat firmu",
        href: "/firmy/pridat",
    },
];



interface PridatFirmuProps {
    druhyFirem: DruhFirmy[];
    adresy: Adresa[];
    okresy: Okres[];
}

export default function PridatFirmu({
    druhyFirem,
    adresy,
    okresy,
}: PridatFirmuProps) {
    const pridatFirmuForm = useForm<PridatFirmuFormData>({
        nazev: "",
        email: "",
        poznamka: "",
        druh_firmy_id: "",
        adresa_id: "",
    });
    const pridatDruhFirmyForm = useForm<PridatDruhFirmy>({
        nazev: "",
    });
    const pridatAdresuForm = useForm<PridatAdresuFormData>({
        popisne_cislo: "",
        mesto: "",
        okres_id: "",
        psc: "",
        stat: "",
        ulice: "",
    });

    const [druhFirmySheetOpen, setDruhFirmySheetOpen] = useState(false);
    const [adresaSheetOpen, setAdresaSheetOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <FirmaLayout>
                <Head title="Přidat firmu" />
                <div className="mx-auto max-w-2xl py-6">
                    <h1 className="mb-6 text-2xl font-bold tracking-tight">
                        Přidat novou firmu
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Vyplňte následující údaje pro přidání nové firmy do
                        systému.
                    </p>

                    <PridatFirmuForm
                        form={pridatFirmuForm}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatFirmuForm.post("/firmy", {
                                onSuccess: (_) => {
                                    pridatFirmuForm.reset();
                                    toast("firma byla vytvořena")
                                }
                            });
                        }}
                        onCancel={() => {
                            pridatFirmuForm.reset();
                            pridatFirmuForm.clearErrors();
                        }}
                        druhyFirem={druhyFirem}
                        onPridatDruhFirmy={() => setDruhFirmySheetOpen(true)}
                        adresy={adresy}
                        onPridatAdresu={() => setAdresaSheetOpen(true)}
                    />

                    <PridatDruhFirmySheet
                        druhyFirem={druhyFirem}
                        form={pridatDruhFirmyForm}
                        open={druhFirmySheetOpen}
                        onOpenChange={setDruhFirmySheetOpen}
                        onSelect={(selected) => {
                            setDruhFirmySheetOpen(false);
                            pridatFirmuForm.setData(
                                "druh_firmy_id",
                                selected.id.toString(),
                            );
                        }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatDruhFirmyForm.post("/druhy_firem", {
                                onSuccess: () => toast("druh firmy byl vytvořen")
                            });
                        }}
                    />

                    <PridatAdresuSheet
                        adresy={adresy}
                        okresy={okresy}
                        onSelect={(selected) => {
                            setAdresaSheetOpen(false);
                            pridatFirmuForm.setData(
                                "adresa_id",
                                selected.id.toString(),
                            );
                        }}
                        form={pridatAdresuForm}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatAdresuForm.post("/adresy", {
                                onSuccess: () => toast("adresa byla vytvořena")
                            });
                        }}
                        onOpenChange={setAdresaSheetOpen}
                        open={adresaSheetOpen}
                    />
                </div>
            </FirmaLayout>
        </AppLayout>
    );
}
