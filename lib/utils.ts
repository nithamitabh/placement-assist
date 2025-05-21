import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to handle guest login
export function loginAsGuest() {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", "guest")
    return true
  }
  return false
}

// Function to check if user is logged in as guest
export function isGuestLoggedIn() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user") === "guest"
  }
  return false
}

// Function to logout guest
export function logoutGuest() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
    return true
  }
  return false
}
