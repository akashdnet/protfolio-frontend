"use client"

import { useState, useCallback, useRef } from "react"

interface FileWithPreview {
  id: string
  file: File
  preview: string
}

interface UseFileUploadOptions {
  accept?: string
  maxSize?: number
  multiple?: boolean
}

export function useFileUpload(options: UseFileUploadOptions = {}) {
  const { accept = "*", maxSize = 5 * 1024 * 1024, multiple = false } = options
  
  const [files, setFiles] = useState<FileWithPreview[]>([])
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

  const processFiles = useCallback((fileList: FileList) => {
    const newErrors: string[] = []
    const validFiles: FileWithPreview[] = []

    Array.from(fileList).forEach(file => {
      const error = validateFile(file)
      if (error) {
        newErrors.push(error)
      } else {
        const id = Math.random().toString(36).substr(2, 9)
        const preview = URL.createObjectURL(file)
        validFiles.push({ id, file, preview })
      }
    })

    setErrors(newErrors)
    if (multiple) {
      setFiles(prev => [...prev, ...validFiles])
    } else {
      setFiles(validFiles.slice(0, 1))
    }
  }, [validateFile, multiple])

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
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
      processFiles(droppedFiles)
    }
  }, [processFiles])

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const removeFile = useCallback((fileId: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return prev.filter(f => f.id !== fileId)
    })
  }, [])

  const getInputProps = useCallback(() => ({
    ref: fileInputRef,
    type: "file" as const,
    accept,
    multiple,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        processFiles(e.target.files)
      }
    }
  }), [accept, multiple, processFiles])

  return [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    }
  ] as const
}