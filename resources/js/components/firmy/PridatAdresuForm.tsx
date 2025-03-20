import { Okres, PridatAdresuFormData } from "@/types/Firma";
import { InertiaFormProps } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import InputError from "../input-error";

type props = {
    form: InertiaFormProps<PridatAdresuFormData>
    onSubmit: FormEventHandler
    okresy: Okres[]
};

export default function PridatAdresuForm({ onSubmit, form, okresy }: props) {
    const { ulice, stat, psc, okres_id, mesto, cislo_popisne } = form.data
    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-2'>
            <div className="space-y-2">
                <Label htmlFor="ulice">Ulice</Label>
                <Input
                    id="ulice"
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                    value={ulice}
                    onChange={e => form.setData('ulice', e.target.value)}
                    disabled={form.processing}
                    placeholder="Zadejte ulici"
                />
                {form.errors.ulice && <p className="text-sm text-red-500">{form.errors.ulice[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="cislo_popisne">Číslo popisné</Label>
                <Input
                    id="cislo_popisne"
                    type="text"
                    required
                    autoFocus
                    tabIndex={2}
                    value={cislo_popisne}
                    onChange={e => form.setData('cislo_popisne', e.target.value)}
                    disabled={form.processing}
                    placeholder="Zadejte popisné číslo"
                />
                {form.errors.cislo_popisne && <p className="text-sm text-red-500">{form.errors.cislo_popisne[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="mesto">Město</Label>
                <Input
                    id="mesto"
                    type="text"
                    required
                    autoFocus
                    tabIndex={2}
                    value={mesto}
                    onChange={e => form.setData('mesto', e.target.value)}
                    disabled={form.processing}
                    placeholder="Zadejte město"
                />
                {form.errors.cislo_popisne && <p className="text-sm text-red-500">{form.errors.cislo_popisne[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="stat">Stát</Label>
                <Input
                    id="stat"
                    type="text"
                    required
                    tabIndex={2}
                    value={stat}
                    onChange={e => form.setData('stat', e.target.value)}
                    disabled={form.processing}
                    placeholder="Zadejte stát"
                />
                {form.errors.stat && <p className="text-sm text-red-500">{form.errors.stat[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="psc">PSČ</Label>
                <Input
                    id="psc"
                    type="text"
                    required
                    tabIndex={3}
                    value={psc}
                    onChange={e => form.setData('psc', e.target.value)}
                    disabled={form.processing}
                    placeholder="Zadejte PSČ"
                />
                {form.errors.psc && <p className="text-sm text-red-500">{form.errors.psc[0]}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="druh_firmy_id">Okres</Label>
                <Select
                    value={form.data.okres_id}
                    onValueChange={(value) => form.setData('okres_id', value)}
                    disabled={form.processing}
                >
                    <SelectTrigger id="druh_firmy_id" tabIndex={3}>
                        <SelectValue placeholder="Vyberte druh firmy" />
                    </SelectTrigger>
                    <SelectContent>
                        {okresy.map((okres) => (
                            <SelectItem key={okres.id} value={okres.id.toString()}>
                                {okres.nazev} {okres.cena}
                            </SelectItem>
                        ))}
                    </SelectContent>

                </Select>
                {form.errors.okres_id && <InputError message={form.errors.okres_id[0]} />}
            </div>
            <Button type='submit' variant='default' onMouseDown={onSubmit}>Vytvořit</Button>
        </form>
    );
}
