import AppLayout from "@/layouts/app-layout";
import KamionyLayout from "@/layouts/kamiony/layout";
import { BreadcrumbItem } from "@/types";
import { Kamion } from "@/types/Kamion";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přehled kamionů",
        href: "/kamiony",
    },
];

export default function Prehled({ kamiony }: { kamiony: Kamion[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Přehled kamionů" />
            <KamionyLayout>
                <div className="w-full py-6">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="mb-6 text-2xl font-semibold">
                                    Přehled kamionů
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </KamionyLayout>
        </AppLayout>
    );
}
