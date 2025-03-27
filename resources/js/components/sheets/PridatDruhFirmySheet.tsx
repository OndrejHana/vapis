import { DruhFirmy, PridatDruhFirmy } from "@/types/Firma";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import PridatDruhFirmyForm from "../firmy/PridatDruhFirmyForm";

export default function PridatDruhFirmySheet({
    open,
    onOpenChange,
    onSelect,
    form,
    druhyFirem,
    onSubmit,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (product: DruhFirmy) => void;
    druhyFirem: DruhFirmy[];
    form: InertiaFormProps<PridatDruhFirmy>;
    onSubmit: FormEventHandler;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Přidat druh firmy</SheetTitle>
                </SheetHeader>
                <div className="space-y-2 px-4">
                    <ScrollArea className="max-h-64">
                        <div className="space-y-2">
                            {druhyFirem.map((product) => (
                                <div
                                    key={product.id}
                                    className="hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-md border p-2"
                                    onClick={() => onSelect(product)}
                                >
                                    <div>
                                        <p className="font-medium">
                                            {product.nazev}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        Vybrat
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="border-t pt-6">
                        <PridatDruhFirmyForm form={form} onSubmit={onSubmit} />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
