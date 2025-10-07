
import { getBlogData } from "@/action/blogAction";
import {Table,TableBody,TableCell,TableFooter,TableHeader,TableRow,} from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import TableHeaderComponent from "./TableHeader";
import TableBodyComponent from "./TableBodyComponent";
import PaginationComponent from "./PaginationComponent";

export default async function TableComponent({queries}:any) {
  
  const page = Number(queries?.page) || 1;
  const limit =  Number(queries?.limit) || 5
  const term =  String(queries?.term) || ""

  const queriesUpdate  = {
    page,
    limit,
    term
  }
  
  const tableHeader = ["Thumbnail", "Title", "Description", "Action"];
  
  
  const res = await getBlogData({page, limit, term} ).then((res)=>res.data);
  return (
    <div className="mx-auto space-y-7">
      <Table className="">
        <TableHeaderComponent tableHeader={tableHeader} />
        <TableBodyComponent data={res.data}  />
        
      </Table>
      <PaginationComponent meta={res.meta} queries={queriesUpdate} />
    </div>
  );
}
