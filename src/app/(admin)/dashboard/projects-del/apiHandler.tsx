import toast from "react-hot-toast";
import { TProject } from "./TableComponent";
import fetchApi from "@/action/fetchApi";

interface CreateDataProps {
  data: any;
  image: any;
  setFormLoading: any;
  setIsOpen: any;
}



interface GatDataProps {
  page: number;
  limit: number;
  term?: string;
  setLoading?: any;
  setError?: any;
  setProjects?: any;
  setMeta?: any;
}




const getData = async ( {page,limit,term,setLoading,setError,setProjects,setMeta}: GatDataProps) => {
    setLoading(true)
    setError(null);

    const FetchOptions = {
      path: "/project/all-projects",
      page: page,
      limit: limit,
      term: term?.trim(),
      tag:"projects"
    };

    try {
      const data = await fetchApi<TProject[]>(FetchOptions);

      const fetchedData = data.data;
      const fetchedMeta = data?.meta;

      setProjects(fetchedData);
      setMeta(fetchedMeta);
      setLoading(false);
      // console.log(fetchedData);
      // console.log(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch projects.");
      console.error("Error fetching projects:", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };


const createData = async ({data,image,setFormLoading,setIsOpen,}: CreateDataProps) => {

  // console.log(`create project data   `,data)

  setFormLoading(true);
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  if (image) {
    formData.append("thumbnail", image);
  }

  console.log(`form data`, formData.get("data"));
  console.log(`form image`, formData.get("thumbnail"));

  const toastId = toast.loading("Creating project...");
  const url = `${process.env.NEXT_PUBLIC_API_URL}/project/create`;

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const result = await res.json();
    if (result.success) {
      setIsOpen(false);
      toast.success("Project created successfully!", { id: toastId });
      setFormLoading(false);

      // console.log(result);
    } else {
      toast.error(`Error creating project: ${result.message}`, { id: toastId });
      console.log("Error creating project:", result.message);
      setFormLoading(false);
    }
  } catch (error: any) {
    console.log("Error updating project:", error);
    toast.error(`Error updating project: ${error.message}`, { id: toastId });
  } finally {
    setFormLoading(false);
  }
};


const editData = async ({data,image,setFormLoading, setEditingProjectId}: {data: any,image: any,setFormLoading: any, setEditingProjectId: any}) => {

    setFormLoading(true);
    const toastId = toast.loading("Updating project...");
    const formData = new FormData();



  formData.append("data", JSON.stringify(data));
  if (image) {
    formData.append("thumbnail", image);
  }

    const id = data._id;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`;

    try {
      const res = await fetch(url, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const result = await res.json();
      if(result.success){

        toast.success("Project updated successfully!", { id: toastId });
        setFormLoading(false);
        setEditingProjectId(null);
        
      }else{
        toast.error(`Error updating project: ${result.message}`, { id: toastId });
        console.log("Error updating project:", result.message);
        setFormLoading(false);
      }
      

    } catch (error: any) {
      console.error("Error updating project:", error);
        toast.error(`Error updating project: ${error.message}`, { id: toastId });
      
    } finally {
      setFormLoading(false);
    }
  };



const projectApiHandler = {
  createData,
  editData,
  getData,
};

export default projectApiHandler;