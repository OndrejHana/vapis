import AppLayout from "@/layouts/app-layout";
import KamionyLayout from "@/layouts/kamiony/layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Upravit firmu",
        href: "/firmy/id",
    },
];

export default function Zobrazit() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <KamionyLayout>
                <div>zobrazit</div>
            </KamionyLayout>
        </AppLayout>
    );
}
