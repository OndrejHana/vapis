import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

// Define a custom fuzzy filter function that will apply ranking info to rows (using match-sorter utils)
//const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
//    // Rank the item
//    const itemRank = rankItem(row.getValue(columnId), value)
//
//    // Store the itemRank info
//    addMeta({
//        itemRank,
//    })
//
//    // Return if the item should be filtered in/out
//    return itemRank.passed
//}


export default function CustomTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    //const [globalFilter, setGLobalFilter] = useState("");
    const [sorting, setSorting] = useState<SortingState>([]);
    //const [pagination, setPagination] = useState<PaginationState>({
    //    pageIndex: 0,
    //    pageSize: 10,
    //})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            //pagination
        },
    });


    return (
        <div className="space-y-2">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="overflow-y-scroll">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div className="flex items-center justify-between gap-2">
                <span className="flex items-center">
                    <Button
                        variant="ghost"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronFirst />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronLast />
                    </Button>
                    <span className="flex items-center gap-1 text-muted-foreground">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}
                        </strong>
                    </span>
                </span>
                <span className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-muted-foreground">
                        Go to page:
                        <Input
                            type="number"
                            min="1"
                            max={table.getPageCount()}
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                table.setPageIndex(page)
                            }}
                            className="w-fit"
                        />
                    </span>
                    <Select
                        defaultValue="10"
                        onValueChange={(e) => {
                            table.setPageSize(Number(e));
                        }}
                    >
                        <SelectTrigger className="max-w-fit">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <SelectItem key={pageSize} value={pageSize.toString()}>
                                    Show {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </span>
            </div>
        </div >
    );
}

//value={table.getState().pagination.pageSize}
