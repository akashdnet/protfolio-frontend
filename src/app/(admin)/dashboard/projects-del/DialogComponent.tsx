// DialogComponent.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DialogComponentProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  onClose: any;
  isOpen: boolean;
}

export function DialogComponent({
  children,
  title,
  description,
  onClose,
  isOpen,
}: DialogComponentProps) {
  return (
    <Dialog open={isOpen} onOpenChange={()=>onClose(false)}> 
      <DialogContent className="sm:max-w-[600px] h-3/4 overflow-y-auto ">
        <DialogHeader className="flex flex-row items-center justify-between bg-transparent">
          <div>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
         
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}