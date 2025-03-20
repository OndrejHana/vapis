import { Head } from '@inertiajs/react';
import { Firma } from '@/types/Firma';
import FirmyTable from '@/components/firmy/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import FirmyLayout from '@/layouts/firmy/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Přehled firem',
        href: '/firmy',
    },
];

export default function Prehled({ firmy }: { firmy: Firma[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Přehled firem" />
            <FirmyLayout>
                <div className="py-6 w-full">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="text-2xl font-semibold mb-6">Přehled firem</h1>
                                <FirmyTable firmy={firmy} />
                            </div>
                        </div>
                    </div>
                </div>
            </FirmyLayout>
        </AppLayout>
    );
}
