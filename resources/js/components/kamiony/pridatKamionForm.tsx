import { Firma } from "@/types/Firma";
import { Kontakt, PridatKamionFormData, Stavba, StavyKamionu } from "@/types/Kamion";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler, MouseEventHandler } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LoaderCircle } from "lucide-react";
import InputError from "../input-error";

interface FirmaFormProps {
    form: InertiaFormProps<PridatKamionFormData>;
    stavyKamionu: StavyKamionu[];
    stavby: Stavba[];
    onPridatStavbu: MouseEventHandler;
    kontakty: Kontakt[];
    onPridatKontakt: MouseEventHandler;
    dopravce: Firma[];
    onPridatDopravce: MouseEventHandler;
    onSubmit: FormEventHandler;
    onCancel: () => void;
    submitText: string | null;
}

export default function PridatKamionForm({
    form,
    stavyKamionu,
    stavby,
    onPridatStavbu,
    kontakty,
    onPridatKontakt,
    dopravce,
    onPridatDopravce,
    onSubmit,
    onCancel,
    submitText = 'Vytvořit'
}: FirmaFormProps) {
    const { data, setData, processing, errors } = form;

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="stavba_id">Stavba *</Label>
                    <Select
                        value={data.stavba_id}
                        onValueChange={(value) => setData("stavba_id", value)}
                        disabled={processing}
                    >
                        <SelectTrigger id="stavba_id" tabIndex={1}>
                            <SelectValue placeholder="Vyberte stavbu" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[200px] overflow-y-auto">
                                {stavby.length > 0 ? (
                                    stavby.map((stavba) => (
                                        <SelectItem
                                            key={stavba.id}
                                            value={stavba.id.toString()}
                                        >
                                            {stavba.nazev}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <span className="text-muted-foreground p-2 text-sm">
                                        Žádné stavby nenalezeny
                                    </span>
                                )}
                            </div>
                            <Separator className="my-1" />
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onMouseDown={onPridatStavbu}
                            >
                                Přidat
                            </Button>
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.stavba_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="stav_id">Stav kamionu *</Label>
                    <Select
                        value={data.stav_id}
                        onValueChange={(value) => setData("stav_id", value)}
                        disabled={processing}
                    >
                        <SelectTrigger id="stav_id" tabIndex={2}>
                            <SelectValue placeholder="Vyberte stav kamionu" />
                        </SelectTrigger>
                        <SelectContent>
                            {stavyKamionu.map((stav) => (
                                <SelectItem
                                    key={stav.id}
                                    value={stav.id.toString()}
                                >
                                    {stav.nazev}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.stav_id} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="kontakt_id">Kontakt</Label>
                    <Select
                        value={data.kontaktni_osoba_id}
                        onValueChange={(value) => setData("kontaktni_osoba_id", value)}
                        disabled={processing}
                    >
                        <SelectTrigger id="kontaktni_osoba_id" tabIndex={3}>
                            <SelectValue placeholder="Vyberte kontakt" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[200px] overflow-y-auto">
                                {kontakty.length > 0 ? (
                                    kontakty.map((kontakt) => (
                                        <SelectItem
                                            key={kontakt.id}
                                            value={kontakt.id.toString()}
                                        >
                                            {kontakt.jmeno} {kontakt.prijmeni}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <span className="text-muted-foreground p-2 text-sm">
                                        Žádné kontakty nenalezeny
                                    </span>
                                )}
                            </div>
                            <Separator className="my-1" />
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onMouseDown={onPridatKontakt}
                            >
                                Přidat
                            </Button>
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.kontaktni_osoba_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="dopravce_id">Dopravce</Label>
                    <Select
                        value={data.dopravce_id}
                        onValueChange={(value) => setData("dopravce_id", value)}
                        disabled={processing}
                    >
                        <SelectTrigger id="dopravce_id" tabIndex={4}>
                            <SelectValue placeholder="Vyberte dopravce" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[200px] overflow-y-auto">
                                {dopravce.length > 0 ? (
                                    dopravce.map((dopravce) => (
                                        <SelectItem
                                            key={dopravce.id}
                                            value={dopravce.id.toString()}
                                        >
                                            {dopravce.nazev}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <span className="text-muted-foreground p-2 text-sm">
                                        Žádní dopravci nenalezeni
                                    </span>
                                )}
                            </div>
                            <Separator className="my-1" />
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onMouseDown={onPridatDopravce}
                            >
                                Přidat
                            </Button>
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.dopravce_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="ridic">Řidič</Label>
                    <Input
                        id="ridic"
                        type="text"
                        tabIndex={5}
                        value={data.ridic_id}
                        onChange={(e) => setData("ridic_id", e.target.value)}
                        disabled={processing}
                        placeholder="Zadejte jméno řidiče"
                    />
                    <InputError message={errors?.ridic_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="spz">SPZ</Label>
                    <Input
                        id="spz"
                        type="text"
                        tabIndex={6}
                        value={data.spz}
                        onChange={(e) => setData("spz", e.target.value)}
                        disabled={processing}
                        placeholder="Zadejte SPZ"
                    />
                    <InputError message={errors?.spz} />
                </div>
                <div className="mt-2 flex justify-end gap-4">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onCancel}
                        disabled={processing}
                        tabIndex={8}
                    >
                        Zrušit
                    </Button>
                    <Button
                        type="submit"
                        className="w-32"
                        tabIndex={7}
                        disabled={processing}
                    >
                        {processing && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {submitText}
                    </Button>
                </div>
            </div>
        </form>
    );
}
