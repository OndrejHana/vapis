import { PridatDruhFirmy } from "@/types/Firma";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import InputError from "../input-error";
import { Button } from "../ui/button";

type props = {
    form: InertiaFormProps<PridatDruhFirmy>;
    onSubmit: FormEventHandler;
};

export default function PridatDruhFirmyForm({ onSubmit, form }: props) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <Label htmlFor="nazev">Druh firmy *</Label>
            <Input
                id="nazev"
                type="text"
                required
                autoFocus
                tabIndex={1}
                value={form.data.nazev}
                onChange={(e) => form.setData("nazev", e.target.value)}
                disabled={form.processing}
                placeholder="Zadejte druh firmy"
            />
            <InputError message={form.errors?.nazev} className="mt-2" />
            <Button type="submit" variant="default">
                Vytvořit
            </Button>
        </form>
    );
}
