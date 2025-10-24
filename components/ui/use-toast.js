"use client";

import { useCallback } from "react";

export function useToast() {
  // Ini versi sederhana: hanya tampilkan alert
  const toast = useCallback(({ title, description }) => {
    alert(`${title}\n\n${description}`);
  }, []);

  return { toast };
}
