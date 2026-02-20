import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  // Redirect from old contact URL to new location
  app.get("/contact-us.html", (req: Request, res: Response) => {
    return res.redirect(301, "/about#contact");
  });
  
  // Contact form submission route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData);
      
      return res.status(200).json({
        message: "Contact form submitted successfully",
        id: contactMessage.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors,
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
