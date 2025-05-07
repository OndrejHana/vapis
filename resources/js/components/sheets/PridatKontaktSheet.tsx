import { Kontakt, PridatKontaktFormData } from "@/types/Kamion";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import PridatKontaktForm from "../kamiony/PridatKontaktForm";

export default function PridatKontaktSheet({
    open,
    onOpenChange,
    onSubmit,
    form,
    kontakty,
    onSelect,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (kontakt: Kontakt) => void;
    kontakty: Kontakt[];
    form: InertiaFormProps<PridatKontaktFormData>;
    onSubmit: FormEventHandler;
}) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Přidat kontakt</SheetTitle>
                </SheetHeader>
                <div className="space-y-2 px-4">
                    <ScrollArea className="max-h-64">
                        <div className="space-y-2">
                            {kontakty.map((kontakt) => (
                                <div
                                    key={kontakt.id}
                                    className="hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-md border p-2"
                                    onClick={() => onSelect(kontakt)}
                                >
                                    <div>
                                        <p className="font-medium">
                                            {kontakt.jmeno} {kontakt.prijmeni}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {kontakt.tel} • {kontakt.email}
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
                        <PridatKontaktForm
                            onSubmit={onSubmit}
                            form={form}
                            onCancel={() => {
                                form.reset();
                                form.clearErrors();
                            }}
                            submitText="Vytvořit"
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
