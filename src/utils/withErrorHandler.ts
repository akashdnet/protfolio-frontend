import { toast } from "react-hot-toast";

export default function withErrorHandler<
  T extends (...args: any[]) => Promise<any>
>(
  fn: T,
  messages?: { loading?: string; success?: string; error?: string }
) {
  return async (
    ...args: Parameters<T>
  ): Promise<Awaited<ReturnType<T>> & { success: boolean; message?: string }> => {
    const toastID = toast.loading(messages?.loading || "Processing...");

    try {
      const res: any = await fn(...args);
      

      if (!res?.success) {
        throw new Error(res?.message || "Unknown error");
      }

      toast.success(messages?.success || "Success!", { id: toastID });
      return { ...res, success: true };
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || messages?.error || "Something went wrong", {
        id: toastID,
      });
      return { success: false, message: error.message || "Something went wrong" } as any;
    }
  };
}
