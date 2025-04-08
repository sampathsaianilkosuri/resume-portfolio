import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

export function downloadResume() {
  // This would normally fetch the resume file
  // For now, create a dummy PDF and download it
  const link = document.createElement('a');
  link.href = '/api/download-resume';
  link.download = 'Sampath_Kosuri_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
