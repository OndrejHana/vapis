import PridatKamionForm from "@/components/kamiony/pridatKamionForm";
import AppLayout from "@/layouts/app-layout";
import KamionyLayout from "@/layouts/kamiony/layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import { PridatKamionFormData, StavyKamionu, Stavba, Kontakt, PridatKontaktFormData } from "@/types/Kamion";
import { Firma } from "@/types/Firma";
import { toast } from "sonner";
import PridatKontaktSheet from "@/components/sheets/PridatKontaktSheet";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přidat kamion",
        href: "/kamiony/pridat",
    },
]

export default function PridatKamion({ stavyKamionu, stavby, kontakty, dopravce }: {
    stavyKamionu: StavyKamionu[],
    stavby: Stavba[],
    kontakty: Kontakt[],
    dopravce: Firma[]
}) {
    const [pridatKontaktSheetOpen, setPridatKontaktSheetOpen] = useState(false);
    const form = useForm<PridatKamionFormData>({
        stav_id: "",
        stavba_id: "",
        datum_nakladky: new Date(),
        spz: "",
        cena_dopravy: 0,
        druh_kamionu_id: "",
        kontaktni_osoba_id: "",
        ridic_id: "",
        dopravce_id: "",
    });

    const pridatKontaktForm = useForm<PridatKontaktFormData>({
        jmeno: "",
        prijmeni: "",
        tel: "",
        email: "",
    });

    return (<AppLayout breadcrumbs={breadcrumbs}>
        <KamionyLayout>
            <Head title="Přidat kamion" />
            <div className="mx-auto max-w-2xl py-6">
                <h1 className="mb-6 text-2xl font-bold tracking-tight">
                    Přidat nový kamion
                </h1>
                <p className="text-muted-foreground mb-8">
                    Vyplňte následující údaje pro přidání
                    nového kamionu do systému.
                </p>
                <PridatKamionForm
                    form={form}
                    stavyKamionu={stavyKamionu}
                    stavby={stavby}
                    onPridatStavbu={() => router.get("/stavby/pridat")}
                    kontakty={kontakty}
                    onPridatKontakt={() => setPridatKontaktSheetOpen(true)}
                    dopravce={dopravce}
                    onPridatDopravce={() => router.get("/dopravci/pridat")}
                    onSubmit={e => {
                        e.preventDefault();
                        form.post("/kamiony", {
                            onSuccess: () => {
                                form.reset();
                                toast("Kamion byl vytvořen");
                            }
                        });
                    }}
                    onCancel={() => {
                        form.reset();
                        form.clearErrors();
                    }}
                    submitText="Vytvořit"
                />

                <PridatKontaktSheet
                    open={pridatKontaktSheetOpen}
                    onOpenChange={setPridatKontaktSheetOpen}
                    onSubmit={(e) => {
                        e.preventDefault();
                        pridatKontaktForm.post("/kontakty", {
                            onSuccess: () => {
                                pridatKontaktForm.reset();
                            }
                        });
                    }}
                    form={pridatKontaktForm}
                    kontakty={kontakty}
                    onSelect={(kontakt) => {
                        setPridatKontaktSheetOpen(false);
                        form.setData("kontaktni_osoba_id", kontakt.id.toString());
                    }}
                />
            </div>
        </KamionyLayout>
    </AppLayout>
    );
}
