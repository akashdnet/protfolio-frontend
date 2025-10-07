"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DialogComponent } from "./DialogComponent";
import { Edit2 } from "lucide-react";
import ProjectForm from "./ProjectForm";
import projectApiHandler from "./apiHandler";
// import { fetchNewData } from "./TableComponent";

export function TopSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  

  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");

  const updateQuery = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term.trim() === "") {
      params.delete("term");
    } else {
      params.set("term", term);
    }
    router.push("?" + params.toString());
  };



  const handleCreate = async ({data, image}:any)=> {
    await projectApiHandler.createData({data, image, setFormLoading, setIsOpen})
    // await fetchNewData()
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      updateQuery(searchTerm);
    }, 100);
    return () => clearTimeout(handler);
  }, [searchTerm]);





  return (
    <div className="flex items-center justify-between w-full mb-4">


      <div>
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
        />
      </div>




      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setIsOpen(true)}>
        <Edit2 className="w-4 h-4" /> Create Project
      </Button>
      <DialogComponent
        title="Edit Project"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ProjectForm
          setIsOpen={() => setIsOpen(false)}
          formLoading={formLoading}
          onSubmit={handleCreate}
        />
      </DialogComponent>



    </div>
  );
}
