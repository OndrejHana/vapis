import PridatFirmuForm from "@/components/firmy/PridatFirmuForm";
import PridatAdresuSheet from "@/components/sheets/PridatAdresuSheet";
import PridatDruhFirmySheet from "@/components/sheets/PridatDruhFirmySheet";
import AppLayout from "@/layouts/app-layout";
import FirmyLayout from "@/layouts/firmy/layout";
import { BreadcrumbItem } from "@/types";
import { Adresa, DruhFirmy, Firma, Okres, PridatAdresuFormData, PridatDruhFirmy, PridatFirmuFormData } from "@/types/Firma";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přehled firem",
        href: "/firmy",
    },
];

export default function Prehled(props: {
    firma: Firma,
    druhy_firem: DruhFirmy[],
    adresy: Adresa[],
    okresy: Okres[]
}) {

    console.log(props)

    const { firma, okresy, adresy, druhy_firem } = props

    const form = useForm<PridatFirmuFormData>({
        nazev: firma.nazev,
        email: firma.email ?? '',
        adresa_id: firma.adresa_id ? firma.adresa_id.toString() : "",
        druh_firmy_id: firma.druh_firmy_id.toString(),
        poznamka: firma.poznamka ?? '',
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
            <Head title="Upravit firmu" />
            <FirmyLayout>
                <div className="space-y-2">
                    <h1 className="mb-6 text-2xl font-semibold">Upravit firmu</h1>
                    <PridatFirmuForm
                        form={form}
                        adresy={adresy}
                        druhyFirem={druhy_firem}
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.put(`/firmy/${firma.id}`, {
                                onSuccess: (_) => {
                                    router.reload()
                                    toast("Firma byla upravena")
                                }
                            });
                        }}
                        onCancel={() => {
                            router.get('/firmy')
                        }}
                        onPridatDruhFirmy={() => { setDruhFirmySheetOpen(true) }}
                        onPridatAdresu={() => { setAdresaSheetOpen(true) }}
                    />
                    <PridatDruhFirmySheet
                        form={pridatDruhFirmyForm}
                        druhyFirem={druhy_firem}
                        open={druhFirmySheetOpen}
                        onOpenChange={setDruhFirmySheetOpen}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatDruhFirmyForm.post("/druhy_firem", {
                                onSuccess: () => toast("druh firmy byl vytvořen")
                            });
                        }}
                        onSelect={(druhFirmy) => {
                            setDruhFirmySheetOpen(false)
                            form.setData('druh_firmy_id', druhFirmy.id.toString())
                        }}
                    />
                    <PridatAdresuSheet
                        form={pridatAdresuForm}
                        adresy={adresy}
                        okresy={okresy}
                        open={adresaSheetOpen}
                        onOpenChange={setAdresaSheetOpen}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatAdresuForm.post("/adresy", {
                                onSuccess: () => toast("adresa byla vytvořena")
                            });
                        }}
                        onSelect={(adresa) => {
                            setDruhFirmySheetOpen(false);
                            form.setData("druh_firmy_id", adresa.id.toString());
                        }}
                    />
                </div>
            </FirmyLayout>
        </AppLayout >
    );
}
