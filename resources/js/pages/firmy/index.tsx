import { Head } from "@inertiajs/react";
import { Firma } from "@/types/Firma";
import FirmyTable from "@/components/firmy/table";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import FirmyLayout from "@/layouts/firmy/layout";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přehled firem",
        href: "/firmy",
    },
];

export default function Prehled({ firmy }: { firmy: Firma[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Přehled firem" />
            <FirmyLayout>
                <div className="w-full py-6">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="mb-6 text-2xl font-semibold">
                                    Přehled firem
                                </h1>
                                <FirmyTable firmy={firmy} />
                            </div>
                        </div>
                    </div>
                </div>
            </FirmyLayout>
        </AppLayout>
    );
}
