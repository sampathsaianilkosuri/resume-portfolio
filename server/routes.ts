import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Message sent successfully!",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      } else {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error" });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req: Request, res: Response) => {
    // In a real application, this would be the path to an actual resume file
    // For now, we'll create a sample PDF-like response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Sampath_Kosuri_Resume.pdf');
    
    // This is just a placeholder - in a real app, you would serve a real PDF file
    res.send("This is a placeholder for the resume PDF file.");
  });

  const httpServer = createServer(app);

  return httpServer;
}
