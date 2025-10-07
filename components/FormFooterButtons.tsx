import React from "react";
import { Button } from "./ui/button";

interface TProps{
  onHandleClose:()=>void
  handleSubmit: ()=>void
  continueButtonTitle:string
  loading: boolean
}


export default function FormFooterButtons({onHandleClose, handleSubmit, continueButtonTitle="Save", loading}: TProps) {
  return (
    <div className="text-end space-x-5 ">
        <Button variant="outline" type="button" onClick={onHandleClose}>Cancel</Button>
           
        <Button className="text-end" onClick={handleSubmit} disabled={loading}>{loading? <span >loading...</span> :continueButtonTitle}</Button>
        </div>
  );
}
