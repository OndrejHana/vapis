import AppLayout from "@/layouts/app-layout";
import KamionyLayout from "@/layouts/kamiony/layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Přidat kamion",
        href: "/kamiony/pridat",
    },
]

export default function PridatKamion() {
    return (<AppLayout breadcrumbs={breadcrumbs}>
        <KamionyLayout>
            <div>pridat</div>
        </KamionyLayout>
    </AppLayout>
    );
}
