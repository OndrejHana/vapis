import { FormEventHandler, MouseEventHandler } from "react";
import { LoaderCircle } from "lucide-react";

import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { Adresa, DruhFirmy, PridatFirmuFormData } from "@/types/Firma";
import { InertiaFormProps } from "@inertiajs/react";

interface FirmaFormProps {
    form: InertiaFormProps<PridatFirmuFormData>;
    onSubmit: FormEventHandler;
    onCancel: () => void;
    druhyFirem: DruhFirmy[];
    onPridatDruhFirmy: MouseEventHandler;
    adresy: Adresa[];
    onPridatAdresu: MouseEventHandler;
    submitText: string | null,
}

export default function PridatFirmuForm({
    form,
    onSubmit,
    onCancel,
    druhyFirem,
    onPridatDruhFirmy,
    adresy,
    onPridatAdresu,
    submitText = 'Vytvořit',

}: FirmaFormProps) {
    const { data, setData, processing, errors } = form;
    console.log('submittext', submitText)

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="nazev">Název firmy *</Label>
                    <Input
                        id="nazev"
                        type="text"
                        required
                        autoFocus
                        tabIndex={1}
                        value={data.nazev}
                        onChange={(e) => setData("nazev", e.target.value)}
                        disabled={processing}
                        placeholder="Zadejte název firmy"
                    />
                    <InputError message={errors?.nazev} className="mt-2" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        tabIndex={2}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        disabled={processing}
                        placeholder="kontakt@firma.cz"
                    />
                    <InputError message={errors?.email} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="druh_firmy_id">Druh firmy *</Label>
                    <Select
                        value={data.druh_firmy_id}
                        onValueChange={(value) =>
                            setData("druh_firmy_id", value)
                        }
                        disabled={processing}
                    >
                        <SelectTrigger id="druh_firmy_id" tabIndex={3}>
                            <SelectValue placeholder="Vyberte druh firmy" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[200px] overflow-y-auto">
                                {druhyFirem.map((druh) => (
                                    <SelectItem
                                        key={druh.id}
                                        value={druh.id.toString()}
                                    >
                                        {druh.nazev}
                                    </SelectItem>
                                ))}
                            </div>
                            <Separator className="my-1" />
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onMouseDown={onPridatDruhFirmy}
                            >
                                Přidat
                            </Button>
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.druh_firmy_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="adresa_id">Adresa</Label>
                    <Select
                        value={data.adresa_id}
                        onValueChange={(value) => setData("adresa_id", value)}
                        disabled={processing}
                    >
                        <SelectTrigger id="adresa_id" tabIndex={4}>
                            <SelectValue placeholder="Vyberte adresu" />
                        </SelectTrigger>
                        <SelectContent>
                            <div className="max-h-[200px] overflow-y-auto">
                                {adresy.length > 0 ? (
                                    adresy.map((adresa) => (
                                        <SelectItem
                                            key={adresa.id}
                                            value={adresa.id.toString()}
                                        >
                                            {adresa.ulice} {adresa.popisne_cislo},{" "}
                                            {adresa.mesto}, {adresa.psc}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <span className="text-muted-foreground p-2 text-sm">
                                        Žádné adresy nenalezeny
                                    </span>
                                )}
                            </div>
                            <Separator className="my-1" />
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onMouseDown={onPridatAdresu}
                            >
                                Přidat
                            </Button>
                        </SelectContent>
                    </Select>
                    <InputError message={errors?.adresa_id} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="poznamka">Poznámka</Label>
                    <Textarea
                        id="poznamka"
                        tabIndex={5}
                        value={data.poznamka}
                        onChange={(e) => setData("poznamka", e.target.value)}
                        disabled={processing}
                        placeholder="Další poznámky o firmě..."
                        rows={4}
                    />
                    <InputError message={errors?.poznamka} />
                </div>

                <div className="mt-2 flex justify-end gap-4">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onCancel}
                        disabled={processing}
                        tabIndex={7}
                    >
                        Zrušit
                    </Button>
                    <Button
                        type="submit"
                        className="w-32"
                        tabIndex={6}
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
