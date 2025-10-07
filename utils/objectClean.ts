export const objectClean = (obj: any)=>(
    Object.fromEntries(
  Object?.entries(obj).filter(([_, value]) => value !== "" && value !== null && value !== undefined))
)