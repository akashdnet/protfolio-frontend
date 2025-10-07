// app/(admin)/dashboard/projects/TableComponent.tsx

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import { AlertDialogComponent } from "./AlertDialogComponent";
import { Skeleton } from "@/components/ui/skeleton";
import fetchApi, { TMeta } from "@/action/fetchApi";
import toast from "react-hot-toast";
import { DialogComponent } from "./DialogComponent";
import projectApiHandler from "./apiHandler";

export interface TProject {
  _id: string;
  thumbnail: string;
  title: string;
  projectLink: string;
  liveSite: string;
  description: string;
  features: string[];
}


export let fetchNewData:any


export function TableComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [projects, setProjects] = useState<TProject[]>([]);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null); 

  const [meta, setMeta] = useState<TMeta>({
    page: 1,
    limit: 5,
    total: 0,
    totalPages: 1,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("page")) || 1;
  const limitParam = Number(searchParams.get("limit")) || 5;
  const termParam = searchParams.get("term") || "";
  const [inputLimit, setInputLimit] = useState(String(limitParam));

  const dataFetch = () =>{ projectApiHandler.getData({page:pageParam,limit:limitParam,term:termParam,setProjects,setMeta,setLoading,setError})}
  fetchNewData = dataFetch

  useEffect(() => {
    dataFetch();
  }, [pageParam, limitParam, termParam]);

  const updateQuery = (page: number, limit: number, term: string = "") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    params.set("limit", String(limit));
    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }
    router.push("?" + params.toString());
  };

  const handleEdit = async ({data,image}:{data:any,image:any}) => {
    await projectApiHandler.editData({data,image, setFormLoading, setEditingProjectId})
    
    dataFetch()
  }

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting project...");
    setLoading(true);
    setError(null);
     const url = `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`;
     try {
      const res = await fetch(url, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Project deleted successfully!", { id: toastId });
        dataFetch()
      }else{
        toast.error(`Error deleting project: ${result.message}`, { id: toastId });
      }
      
     } catch (error: any) {
      console.error("Error deleting project:", error);
        toast.error(`Error deleting project: ${error.message}`, { id: toastId });
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const parsed = Number(inputLimit);
      if (!isNaN(parsed) && parsed > 0 && parsed !== limitParam) {
        updateQuery(1, parsed, termParam);
      }
    }, 200);

    return () => clearTimeout(handler);
  }, [inputLimit, limitParam, termParam]);

  if (error) {
    return (
      <div className="space-y-4 p-4 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  const showSkeletons = loading && projects.length === 0;
  const showNoProjectsMessage = !loading && projects.length === 0;

  return (
    <div className="space-y-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {showSkeletons ? (
            Array.from({ length: limitParam }).map((_, i) => (
              <TableRow key={i} className="h-[72px]">
                <TableCell>
                  <Skeleton className="h-[60px] w-[60px] rounded-md" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-[20px] w-[150px]" />
                </TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  <Skeleton className="h-[32px] w-[32px] rounded-md" />
                  <Skeleton className="h-[32px] w-[32px] rounded-md" />
                </TableCell>
              </TableRow>
            ))
          ) : showNoProjectsMessage ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-8">
                No projects found.
              </TableCell>
            </TableRow>
          ) : (
            Array.isArray(projects) &&
            projects.map((project) => (
              <TableRow key={project._id} className="h-[72px]">
                <TableCell>
                  <Link href="#" target="_blank">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={60}
                      height={60}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  <Button variant="outline" size="icon" onClick={() => setEditingProjectId(project._id)}><Edit2 size={10} /></Button>
                  <DialogComponent
                    title="Edit Project"
                     isOpen={editingProjectId === project._id}
                    onClose={()=>setEditingProjectId(null)}
                  >
                    <ProjectForm
                      initialData={project}
                      setIsOpen={()=>setEditingProjectId(null)}
                      formLoading={formLoading}
                      onSubmit={(data) => {
                        handleEdit(data);
                      }}
                    />
                  </DialogComponent>
                  <AlertDialogComponent
                    buttonText={
                      <Button variant="destructive" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    }
                    title="Are you sure?"
                    description="This action cannot be undone."
                    onConfirm={() => handleDelete(project._id)}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label htmlFor="rows" className="text-sm">
            Rows per page:
          </label>
          <input
            id="rows"
            type="text"
            value={inputLimit}
            onChange={(e) => setInputLimit(e.target.value)}
            className="border rounded px-2 py-1 text-sm w-20"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={meta.page <= 1 || loading}
            onClick={() => updateQuery(pageParam - 1, limitParam, termParam)}
          >
            Previous
          </Button>
          <span>
            Page {meta.page} of {meta.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={meta.page >= meta.totalPages || loading}
            onClick={() => updateQuery(pageParam + 1, limitParam, termParam)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
