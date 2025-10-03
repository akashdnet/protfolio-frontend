"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DialogComponent } from "./DialogComponent";
import { Edit2 } from "lucide-react";
import ProjectForm from "./BlogForm";

export function TopSection() {
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

  const handleCreate = (data: any) => {
    console.log("Created project:", data);
  };

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
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
        />
      </div>





      <DialogComponent
        title="Create Blog"
        buttonText={
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Edit2 className="w-4 h-4" /> Create Blog
          </Button>
        }
      >
        <ProjectForm
          initialData={{ title: "" }}
          onSubmit={handleCreate}
        />



        
      </DialogComponent>



    </div>
  );
}
