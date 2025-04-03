import { Firma } from "../../types/Firma";
import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "../table/table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowDownAZ, ArrowDownZA, ArrowUpDown } from "lucide-react";

interface FirmyTableProps {
    firmy: Firma[];
}

const columns: ColumnDef<Firma>[] = [
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
        accessorKey: "nazev",
        header: ({ column }) => {
            const sorted = column.getIsSorted()
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Název
                    {sorted === false
                        ? (<ArrowUpDown className="h-4 w-4" />)
                        : sorted === 'asc'
                            ? (<ArrowDownAZ className="h-4 w-4" />)
                            : (<ArrowDownZA className="h-4 w-4" />)
                    }
                </Button>
            );
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            const sorted = column.getIsSorted()
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email
                    {sorted === false
                        ? (<ArrowUpDown className="h-4 w-4" />)
                        : sorted === 'asc'
                            ? (<ArrowDownAZ className="h-4 w-4" />)
                            : (<ArrowDownZA className="h-4 w-4" />)
                    }
                </Button>
            );
        },
    },
    {
        accessorKey: "druh_firmy.nazev",
        header: ({ column }) => {
            const sorted = column.getIsSorted()
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Druh firmy
                    {sorted === false
                        ? (<ArrowUpDown className="h-4 w-4" />)
                        : sorted === 'asc'
                            ? (<ArrowDownAZ className="h-4 w-4" />)
                            : (<ArrowDownZA className="h-4 w-4" />)
                    }
                </Button>
            );
        },
    },
    {
        accessorKey: "adresa",
        header: "Adresa",
        cell: (props) => {
            const adresa = props.row.original.adresa;
            if (!adresa) return null;
            return `${adresa.ulice} ${adresa.popisne_cislo}, ${adresa.mesto}, ${adresa.psc}`;
        },
    },
];

export default function FirmyTable({ firmy }: FirmyTableProps) {
    return <CustomTable columns={columns} data={firmy} />;
}
