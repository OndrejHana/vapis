import { Head, InertiaFormProps, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

import FirmaLayout from '@/layouts/firmy/layout';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Adresa, DruhFirmy, Okres, PridatAdresuFormData, PridatDruhFirmy, PridatFirmuFormData } from '@/types/Firma';
import PridatFirmuForm from '@/components/firmy/PridatFirmuForm';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import PridatDruhFirmyForm from '@/components/firmy/PridatDruhFirmyForm';
import PridatAdresuForm from '@/components/firmy/PridatAdresuForm';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Přidat firmu',
        href: '/firmy/pridat',
    },
];

function PridatDruhFirmySheet({ open, onOpenChange, onSelect, form, druhyFirem, onSubmit }: {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSelect: (product: DruhFirmy) => void
    druhyFirem: DruhFirmy[]
    form: InertiaFormProps<PridatDruhFirmy>
    onSubmit: FormEventHandler
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Přidat druh firmy</SheetTitle>
                </SheetHeader>
                <div className='px-4 space-y-2'>
                    <ScrollArea className='max-h-64 '>
                        <div className='space-y-2'>
                            {druhyFirem.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex justify-between items-center p-2 border rounded-md hover:bg-muted cursor-pointer w-full"
                                    onClick={() => onSelect(product)}
                                >
                                    <div>
                                        <p className="font-medium">{product.nazev}</p>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        Vybrat
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className='border-t pt-6' >
                        <PridatDruhFirmyForm
                            form={form}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}


function PridatAdresuSheet({ open, onOpenChange, onSubmit, form, adresy, onSelect, okresy }: {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSelect: (product: Adresa) => void
    adresy: Adresa[]
    okresy: Okres[]
    form: InertiaFormProps<PridatAdresuFormData>
    onSubmit: FormEventHandler
}) {

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Přidat adresu</SheetTitle>
                </SheetHeader>
                <div className='px-4 space-y-2'>
                    <ScrollArea className='max-h-64 '>
                        <div className='space-y-2'>
                            {adresy.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex justify-between items-center p-2 border rounded-md hover:bg-muted cursor-pointer w-full"
                                    onClick={() => onSelect(product)}
                                >
                                    <div>
                                        <p className="font-medium">{product.ulice} {product.popisne_cislo} {product.mesto} {product.psc}</p>
                                        <p className="text-sm text-muted-foreground">${product.okres.nazev} {product.okres.cena}</p>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        Vybrat
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className='border-t pt-6' >
                        <PridatAdresuForm
                            okresy={okresy}
                            onSubmit={onSubmit}
                            form={form}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet >
    );
}




interface PridatFirmuProps {
    druhyFirem: DruhFirmy[];
    adresy: Adresa[];
    okresy: Okres[];
}

export default function PridatFirmu({ druhyFirem, adresy, okresy }: PridatFirmuProps) {
    const pridatFirmuForm = useForm<PridatFirmuFormData>({
        nazev: '',
        email: '',
        poznamka: '',
        druh_firmy_id: '',
        adresa_id: '',
    });
    const pridatDruhFirmyForm = useForm<PridatDruhFirmy>({
        nazev: "",
    });
    const pridatAdresuForm = useForm<PridatAdresuFormData>({
        cislo_popisne: '',
        mesto: '',
        okres_id: '',
        psc: '',
        stat: '',
        ulice: '',
    });

    const [druhFirmySheetOpen, setDruhFirmySheetOpen] = useState(false);
    const [adresaSheetOpen, setAdresaSheetOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <FirmaLayout>
                <Head title="Přidat firmu" />
                <div className="mx-auto max-w-2xl py-6">
                    <h1 className="text-2xl font-bold tracking-tight mb-6">Přidat novou firmu</h1>
                    <p className="text-muted-foreground mb-8">
                        Vyplňte následující údaje pro přidání nové firmy do systému.
                    </p>

                    <PridatFirmuForm
                        form={pridatFirmuForm}
                        onSubmit={(e) => {
                            e.preventDefault()
                            pridatFirmuForm.post("")
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
                            setDruhFirmySheetOpen(false)
                            pridatFirmuForm.setData("druh_firmy_id", selected.id.toString())
                        }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            pridatDruhFirmyForm.post('/druhy_firem');
                        }}
                    />

                    <PridatAdresuSheet
                        adresy={adresy}
                        okresy={okresy}
                        onSelect={(selected) => {
                            setAdresaSheetOpen(false)
                            pridatFirmuForm.setData("adresa_id", selected.id.toString())
                        }}
                        form={pridatAdresuForm}
                        onSubmit={(e) => {
                            e.preventDefault()
                            pridatAdresuForm.post('/adresy')
                        }}
                        onOpenChange={setAdresaSheetOpen}
                        open={adresaSheetOpen}
                    />
                </div>
            </FirmaLayout>
        </AppLayout>
    );
}
