import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "../ui/table";
import { Firma, DruhFirmy } from "../../types/Firma";
import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "../table/table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

interface FirmyTableProps {
    firmy: Firma[];
}

//id: number;
//adresa_id: number;
//druh_firmy_id: number;
//nazev: string;
//email: string;
//poznamka: string | null;
//created_at?: string;
//updated_at?: string;
//// Relationships
//adresa?: Adresa;
//druh_firmy?: DruhFirmy;

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
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Název
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "druh_firmy.nazev",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Druh firmy
                    <ArrowUpDown className="ml-2 h-4 w-4" />
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
