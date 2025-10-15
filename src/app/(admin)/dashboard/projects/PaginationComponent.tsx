"use client"

import { TMeta } from "@/action/projectAction";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";




export default function PaginationComponent({meta, queries}:{meta:TMeta, queries:{page:number, limit:number, term:string}}) {

    const [inputLimit, setInputLimit] = useState(String(queries.limit))
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const params = new URLSearchParams(searchParams.toString());
    useEffect(()=>{
        params.set("limit", String(inputLimit));
        // console.log(first)  
        router.push("?" + params.toString());
        router.refresh()
    },[inputLimit])
    // console.log(params.get("limit"))
    
    const updateQuery = (page: number, limit: number, term: string = "") => {
    
    params.set("page", String(page));
    params.set("limit", String(limit));
    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }
    router.push("?" + params.toString());
  };   

  // console.log(`input limit ${inputLimit}`)

  return (
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
            disabled={meta.page <= 1 }
            onClick={() => updateQuery(Number(queries.page) - 1, queries.limit, queries.term)}
          >
            Previous
          </Button>
          <span>
            Page {meta.page} of {meta.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={meta.page >= meta.totalPages }
            onClick={() => updateQuery(Number(queries.page) + 1, queries.limit, queries.term)}
          >
            Next
          </Button>
        </div>
      </div>
  )
}
