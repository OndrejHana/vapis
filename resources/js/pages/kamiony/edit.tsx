import AppLayout from "@/layouts/app-layout";
import KamionyLayout from "@/layouts/kamiony/layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přehled kamionů",
        href: "/kamiony",
    },
];

export default function Upravit() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <KamionyLayout>
                <div>upravit</div>
            </KamionyLayout>
        </AppLayout>
    );
}
