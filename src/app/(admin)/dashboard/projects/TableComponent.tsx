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
import { DialogComponent } from "./DialogComponent";
import ProjectForm from "./ProjectForm";
import { AlertDialogComponent } from "./AlertDialogComponent";
import { Skeleton } from "@/components/ui/skeleton";

const projects = Array.from({ length: 20 }).map((_, i) => ({
  id: `P${i + 1}`,
  title: `Project ${i + 1}`,
  url: "/blog.jpg",
}));

export function TableComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("page")) || 1;
  const limitParam = Number(searchParams.get("limit")) || 5;

  const [inputLimit, setInputLimit] = useState(String(limitParam));
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(projects.length / limitParam);
  const startIndex = (pageParam - 1) * limitParam;
  const currentData = projects.slice(startIndex, startIndex + limitParam);

  const handleEdit = (id: string, data: any) => {
    console.log("Edited project:", id, data);
  };

  const handleDelete = (id: string) => {
    console.log("Deleted project:", id);
  };

  const updateQuery = (page: number, limit: number) => {
    setLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    params.set("limit", String(limit));
    router.push("?" + params.toString());
    setTimeout(() => setLoading(false), 600);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const parsed = Number(inputLimit);
      if (!isNaN(parsed) && parsed > 0 && parsed !== limitParam) {
        updateQuery(1, parsed);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputLimit]);

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
          {loading ? (
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
          ) : (
            currentData.map((project) => (
              <TableRow key={project.id} className="h-[72px]">
                <TableCell>
                  <Link href={project.url} target="_blank">
                    <Image
                      src={project.url}
                      alt={project.title}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  <DialogComponent
                    title="Edit Project"
                    buttonText={
                      <Button variant="outline" size="icon">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    }
                  >
                    <ProjectForm
                      initialData={{ title: project.title }}
                      onSubmit={(data) => handleEdit(project.id, data)}
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
                    onConfirm={() => handleDelete(project.id)}
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
            disabled={pageParam === 1}
            onClick={() => updateQuery(pageParam - 1, limitParam)}
          >
            Previous
          </Button>
          <span>
            Page {pageParam} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={pageParam === totalPages}
            onClick={() => updateQuery(pageParam + 1, limitParam)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
