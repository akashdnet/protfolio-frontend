"use client";

import withErrorHandler from "@/utils/withErrorHandler";
import AlertDialogComponent from "./AlertDialogComponent";
import { DialogComponent } from "./DialogComponent";
import { deleteProjectData, TProject } from "@/action/projectAction";

export default async function TableActionButton({ data }: { data: TProject }) {

        const handelDelete = withErrorHandler(deleteProjectData, {
            loading: "Deleting project...",
            success: "Project deleted successfully",
            error: "Failed to delete project",
        });

  return (
    <div className="flex gap-2 justify-end">
      <DialogComponent data={data} dialogHeader="Edit Project"/>
      <AlertDialogComponent onContinue={()=>{handelDelete(data._id)}} />
    </div>
  );
}
