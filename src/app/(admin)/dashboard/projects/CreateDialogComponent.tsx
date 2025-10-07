
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import CreateFormComponent from "./CreateFormComponent";

interface TProps {
  
  dialogHeader?: string;
  continueButtonTitle?: string;
}

export function CreateDialogComponent({
  
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
        <Button >
          + Create Project
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

        <CreateFormComponent onHandleClose={handleClose}  />
      </DialogContent>
    </Dialog>
  );
}
