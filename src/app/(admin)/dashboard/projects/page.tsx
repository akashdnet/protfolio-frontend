"use client";

import * as React from "react"
import { TableComponent } from "./TableComponent";
import { TopSection } from "./TopSection";

export default function Page() {
  const [items, setItems] = React.useState<any[]>([]);

  const handleEdit = (item: any) => {
    console.log("Edit:", item);
  };

  const handleDelete = (item: any) => {
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (





    <div className="p-6">

      <h1 className="text-center text-3xl font-semibold ">Project List</h1>

      <TopSection/>


      <TableComponent/>
    </div>
  );
}
