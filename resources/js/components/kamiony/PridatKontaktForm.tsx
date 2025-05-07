import { FormEventHandler, MouseEventHandler } from "react";
import { LoaderCircle } from "lucide-react";

import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PridatKontaktFormData } from "@/types/Kamion";
import { InertiaFormProps } from "@inertiajs/react";

interface KontaktFormProps {
    form: InertiaFormProps<PridatKontaktFormData>;
    onSubmit: FormEventHandler;
    onCancel: () => void;
    submitText: string | null;
}

export default function PridatKontaktForm({
    form,
    onSubmit,
    onCancel,
    submitText = 'Vytvořit'
}: KontaktFormProps) {
    const { data, setData, processing, errors } = form;

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="jmeno">Jméno *</Label>
                    <Input
                        id="jmeno"
                        type="text"
                        required
                        autoFocus
                        tabIndex={1}
                        value={data.jmeno}
                        onChange={(e) => setData("jmeno", e.target.value)}
                        disabled={processing}
                        placeholder="Zadejte jméno"
                    />
                    <InputError message={errors?.jmeno} className="mt-2" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="prijmeni">Příjmení *</Label>
                    <Input
                        id="prijmeni"
                        type="text"
                        required
                        tabIndex={2}
                        value={data.prijmeni}
                        onChange={(e) => setData("prijmeni", e.target.value)}
                        disabled={processing}
                        placeholder="Zadejte příjmení"
                    />
                    <InputError message={errors?.prijmeni} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="tel">Telefon *</Label>
                    <Input
                        id="tel"
                        type="tel"
                        required
                        tabIndex={3}
                        value={data.tel}
                        onChange={(e) => setData("tel", e.target.value)}
                        disabled={processing}
                        placeholder="+420 123 456 789"
                    />
                    <InputError message={errors?.tel} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        tabIndex={4}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        disabled={processing}
                        placeholder="kontakt@email.cz"
                    />
                    <InputError message={errors?.email} />
                </div>

                <div className="mt-2 flex justify-end gap-4">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onCancel}
                        disabled={processing}
                        tabIndex={6}
                    >
                        Zrušit
                    </Button>
                    <Button
                        type="submit"
                        className="w-32"
                        tabIndex={5}
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