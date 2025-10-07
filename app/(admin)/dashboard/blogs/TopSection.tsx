"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DialogComponent } from "./DialogComponent";
import { Edit2 } from "lucide-react";
import { CreateDialogComponent } from "./CreateDialogComponent";

export function TopSection() {
  

  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");

  const updateQuery = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term.trim() === "") {
      params.delete("term");
    } else {
      params.delete("page");
      params.set("term", term);
    }
    router.push("?" + params.toString());
  };



  const handleCreate = async ({data, image}:any)=> {
    // await 
    // await fetchNewData()
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      updateQuery(searchTerm);
    }, 100);
    return () => clearTimeout(handler);
  }, [searchTerm]);





  return (
    <div className="flex items-center justify-between mx-auto w-full mb-4">


      <div>
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
        />
      </div>




        
      <CreateDialogComponent  />

    </div>
  );
}
