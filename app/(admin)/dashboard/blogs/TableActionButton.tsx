"use client";

import { deleteBlogData, TBlog } from "@/action/blogAction";
import withErrorHandler from "@/utils/withErrorHandler";
import AlertDialogComponent from "./AlertDialogComponent";
import { DialogComponent } from "./DialogComponent";

export default async function TableActionButton({ data }: { data: TBlog }) {

        const handelDelete = withErrorHandler(deleteBlogData, {
            loading: "Deleting blog...",
            success: "Blog deleted successfully",
            error: "Failed to delete blog",
        });

  return (
    <div className="flex gap-2 justify-end">
      <DialogComponent data={data} dialogHeader="Edit Blog"/>
      <AlertDialogComponent onContinue={()=>{handelDelete(data._id)}} />
    </div>
  );
}
