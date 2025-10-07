import { TBlog } from "@/action/blogAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import FormComponent from "./EditFormComponent";

interface TProps {
  data: TBlog;
  dialogHeader?: string;
  continueButtonTitle?: string;
}

export function DialogComponent({
  data,
  dialogHeader = "Form",
  continueButtonTitle = "Save",
}: TProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        <Button variant="outline">
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-2/3 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{dialogHeader}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click {continueButtonTitle} when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <FormComponent onHandleClose={handleClose} initialData={data} />
      </DialogContent>
    </Dialog>
  );
}
