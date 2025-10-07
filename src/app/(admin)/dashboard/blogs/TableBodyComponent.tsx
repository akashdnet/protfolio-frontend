import { TBlog, TMeta } from "@/action/blogAction";
import { TableBody, TableCell, TableFooter, TableRow } from "@/components/ui/table";
import Image from "next/image";
import TableActionButton from "./TableActionButton";
import PaginationComponent from "./PaginationComponent";


export default function TableBodyComponent({data}:{data:TBlog[]}) {
  return (
    <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="relative w-10 h-15 rounded-full">
                <Image sizes="icon" fill src={item.thumbnail!} alt={item.title} />
              </TableCell>
              <TableCell className="truncate">{item.title.slice(0, 25)}...</TableCell>
              <TableCell className="truncate">{item.description.slice(0, 20)}...</TableCell>
              <TableCell className="truncate"><TableActionButton data={item}/></TableCell>
            </TableRow>
          ))}
          
        </TableBody>
  )
}
