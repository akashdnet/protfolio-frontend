import { TableCell, TableHeader, TableRow } from "@/components/ui/table";


export default function TableHeaderComponent({tableHeader}:{tableHeader:string[]}) {
  return (
    <TableHeader>
          <TableRow>
            {tableHeader.map((header, index) => {
                const textLeft = header == "Action" && "text-end";
              return (
                <TableCell key={index} className={`font-medium ${textLeft}`} >
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHeader>
  )
}
