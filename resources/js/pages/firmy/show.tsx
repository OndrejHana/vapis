import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import FirmyLayout from "@/layouts/firmy/layout";
import { BreadcrumbItem } from "@/types";
import { Firma } from "@/types/Firma";
import { Head, Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přehled firem",
        href: "/firmy",
    },
];

export default function Prehled(props: { firma: Firma }) {
    console.log(props)
    const { firma } = props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Přehled firem" />
            <FirmyLayout>
                <div className="space-y-2">
                    <h1 className="mb-6 text-2xl font-semibold">Firma</h1>
                    <div className="space-y-2">
                        <div>email: {firma.email}</div>
                        <div>nazev: {firma.nazev}</div>
                        <div>adresa: {JSON.stringify(firma.adresa)}</div>
                        <div>druh firmy: {JSON.stringify(firma.druh_firmy)}</div>
                        <div>poznamka: {firma.poznamka}</div>
                    </div>
                    <Link href={`/firmy/${firma.id}/edit`}><Button type="button" className="cursor-pointer">Upravit</Button></Link>
                </div>
            </FirmyLayout>
        </AppLayout >
    );
}
