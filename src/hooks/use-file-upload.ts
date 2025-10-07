"use client"

import { useState, useCallback, useRef } from "react"

interface SingleFileWithPreview {
  id: string
  file: File
  preview: string
}

interface UseSingleFileUploadOptions {
  accept?: string
  maxSize?: number
}

export function useSingleFileUpload(options: UseSingleFileUploadOptions = {}) {
  const { accept = "image/*", maxSize = 5 * 1024 * 1024 } = options
  
  const [file, setFile] = useState<SingleFileWithPreview | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = useCallback((file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size must be less than ${Math.round(maxSize / (1024 * 1024))}MB`
    }
    
    if (accept !== "*" && !accept.split(",").some(type => 
      file.type.match(type.trim().replace("*", ".*"))
    )) {
      return "File type not supported"
    }
    
    return null
  }, [accept, maxSize])

  const processFile = useCallback((fileList: FileList) => {
    if (fileList.length === 0) return
    
    const selectedFile = fileList[0]
    const error = validateFile(selectedFile)
    
    if (error) {
      setErrors([error])
      setFile(null)
    } else {
      if (file) {
        URL.revokeObjectURL(file.preview)
      }
      
      setErrors([])
      const id = Math.random().toString(36).substr(2, 9)
      const preview = URL.createObjectURL(selectedFile)
      setFile({ id, file: selectedFile, preview })
    }
  }, [validateFile, file])

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const relatedTarget = e.relatedTarget as Node | null;
    if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
      setIsDragging(false)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      processFile(droppedFiles)
    }
  }, [processFile])

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const removeFile = useCallback(() => {
    if (file) {
      URL.revokeObjectURL(file.preview)
      setFile(null)
    }
    setErrors([])
  }, [file])

  const clearAll = useCallback(() => {
    if (file) {
      URL.revokeObjectURL(file.preview)
    }
    setFile(null)
    setErrors([])
  }, [file])

  const getInputProps = useCallback(() => ({
    ref: fileInputRef,
    type: "file",
    accept,
    multiple: false, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        processFile(e.target.files)
      }

      e.target.value = ""
    }
  }), [accept, processFile])

  return [
    { file, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearAll,
      getInputProps,
    }
  ] as const
}