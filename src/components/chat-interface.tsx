"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, Send, User, ImageIcon, Settings, Menu, X } from "lucide-react";
import { useChat } from "ai/react";

export default function ChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? "fixed left-0 top-0 h-full z-50 transform transition-transform"
            : "relative"
        } ${
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        } w-16 bg-gray-200 flex flex-col items-center py-4 space-y-4`}
      >
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="self-end mr-2 mb-2"
          >
            <X className="w-4 h-4" />
          </Button>
        )}

        <div className="p-2 bg-gray-300 rounded-lg">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>

        <Button variant="ghost" size="sm" className="p-2">
          <Bot className="w-6 h-6" />
        </Button>

        <Button variant="ghost" size="sm" className="p-2">
          <ImageIcon className="w-6 h-6" />
        </Button>

        <div className="flex-1"></div>

        <Button variant="ghost" size="sm" className="p-2">
          <User className="w-6 h-6" />
        </Button>

        <Button variant="ghost" size="sm" className="p-2">
          <Settings className="w-6 h-6" />
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-300 p-4 flex items-center justify-center relative">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="absolute left-4"
            >
              <Menu className="w-6 h-6" />
            </Button>
          )}

          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <span className="font-semibold text-lg">CamTour</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-semibold text-gray-600 mb-8">
                What can we help you today?
              </h2>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <Card
                  className={`max-w-xs md:max-w-md p-3 ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </Card>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <Card className="max-w-xs md:max-w-md p-3 bg-white">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask anything here..."
              className="flex-1 rounded-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-full p-3 bg-black hover:bg-gray-800"
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-2 px-4">
            We do our best to give accurate info but we might make mistakes.
            Please review the additional resources we provide. Thank you so much
            for considering visiting Cambodia.
          </p>
        </div>
      </div>
    </div>
  );
}
