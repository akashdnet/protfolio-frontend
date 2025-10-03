"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DialogComponentProps {
  children: React.ReactNode;
  buttonText: React.ReactNode;
  title: string;
  description?: string;
  onSave?: () => void; 
}

export function DialogComponent({
  children,
  buttonText,
  title,
  description,
  onSave,
}: DialogComponentProps) {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (onSave) onSave();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{buttonText}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-3/4 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children}

        <DialogFooter className="flex gap-2">
          <DialogClose asChild>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="project-form"
            className="flex-1"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
