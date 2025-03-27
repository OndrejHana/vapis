import { Adresa, Okres, PridatAdresuFormData } from "@/types/Firma";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import PridatAdresuForm from "../firmy/PridatAdresuForm";

export default function PridatAdresuSheet({
    open,
    onOpenChange,
    onSubmit,
    form,
    adresy,
    onSelect,
    okresy,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (product: Adresa) => void;
    adresy: Adresa[];
    okresy: Okres[];
    form: InertiaFormProps<PridatAdresuFormData>;
    onSubmit: FormEventHandler;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Přidat adresu</SheetTitle>
                </SheetHeader>
                <div className="space-y-2 px-4">
                    <ScrollArea className="max-h-64">
                        <div className="space-y-2">
                            {adresy.map((product) => (
                                <div
                                    key={product.id}
                                    className="hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-md border p-2"
                                    onClick={() => onSelect(product)}
                                >
                                    <div>
                                        <p className="font-medium">
                                            {product.ulice}{" "}
                                            {product.popisne_cislo}{" "}
                                            {product.mesto} {product.psc}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {product.okres.nazev}{" "}
                                            {product.okres.cena}
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
                        <PridatAdresuForm
                            okresy={okresy}
                            onSubmit={onSubmit}
                            form={form}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
