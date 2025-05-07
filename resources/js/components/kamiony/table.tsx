import { Kamion } from "@/types/Kamion";
import CustomTable from "../table/table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";


const columns: ColumnDef<Kamion>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select All"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "stavba",
        accessorKey: "stavby.nazev",
        header: "Stavba"
    },
    {
        id: "stav",
        accessorKey: "stav.nazev",
        header: "Stav",
    },
    {
        id: "datumNakladky",
        accessorKey: "datum_nakladky",
        header: "Datum nakladky",
    },
    {
        id: "dopravce",
        accessorKey: "dopravce.nazev",
        header: "Dopravce",
    },
    {
        id: "druhKamionu",
        accessorKey: "druh_kamionu.nazev",
        header: "Druh kamionu",
    },
    {
        id: "spz",
        accessorKey: "spz",
        header: "SPZ",
    }
]

export default function KamionyTable({ kamiony }: { kamiony: Kamion[] }) {
    return <CustomTable columns={columns} data={kamiony} onRowClick={(e) => console.log(e)} />;
}
