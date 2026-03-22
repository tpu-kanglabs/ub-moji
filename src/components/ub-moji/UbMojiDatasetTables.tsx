import type {
  DatasetDetails,
  DatasetTable,
} from "@/lib/ub-moji-dataset-details";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

type DatasetTableCardProps = {
  table: DatasetTable;
};

function DatasetTableCard({ table }: DatasetTableCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{table.title}</CardTitle>
        {table.description ? (
          <CardDescription>{table.description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Table>
          <TableHeader>
            <TableRow>
              {table.columns.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row) => (
              <TableRow key={`${table.title}-${row[0]}`}>
                {table.columns.map((column, columnIndex) => (
                  <TableCell key={`${table.title}-${row[0]}-${column}`}>
                    {row[columnIndex]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {table.note ? (
          <p className="text-sm text-muted-foreground">{table.note}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

type UbMojiDatasetTablesProps = {
  details: DatasetDetails;
};

export default function UbMojiDatasetTables({
  details,
}: UbMojiDatasetTablesProps) {
  return (
    <div className="flex flex-col gap-8">
      {details.tables.map((table) => (
        <DatasetTableCard key={table.title} table={table} />
      ))}

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>{details.naming.title}</CardTitle>
          <CardDescription>{details.naming.pattern}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Table>
            <TableHeader>
              <TableRow>
                {details.naming.columns.map((column) => (
                  <TableHead key={column}>{column}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.naming.rows.map((row) => (
                <TableRow key={`naming-${row[0]}`}>
                  {details.naming.columns.map((column, columnIndex) => (
                    <TableCell key={`naming-${row[0]}-${column}`}>
                      {row[columnIndex]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3">
        <p className="text-balance text-2xl font-semibold tracking-[0.02em] text-foreground sm:text-3xl">
          {details.license.title}
        </p>
        <p className="text-sm text-muted-foreground sm:text-base">
          {details.license.note}
        </p>
        <div className="flex flex-wrap gap-3">
          {details.license.items.map((item) => (
            <Badge key={item} variant="secondary" className="px-3 py-1 text-sm">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
