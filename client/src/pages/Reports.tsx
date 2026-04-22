import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Sparkles, Send, Copy, RefreshCw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Reports() {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Mock generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContent(`# Weekly Progress Report: Project Alpha
**Date:** December 7, 2025

## 🚀 Highlights
This week, the team successfully deployed the new authentication module to staging. User testing has begun with positive initial feedback.

## ✅ Completed Tasks
* **[FE-102]** Implement login screen UI
* **[BE-204]** Set up OAuth2 endpoints
* **[QA-001]** Integration tests for user signup

## 🚧 In Progress
* **[FE-105]** Dashboard analytics widgets
* **[BE-210]** Database migration for user preferences

## 📅 Next Week's Focus
We will be focusing on finalizing the dashboard widgets and starting the integration of the payment gateway.

---
*Generated automatically by NewsletterFlow*`);
      toast({
        title: "Report Generated",
        description: "Your weekly summary is ready for review.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 h-full flex flex-col">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{t('reports')}</h1>
        <p className="text-muted-foreground mt-2">Generate and distribute your weekly updates.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 flex-1">
        {/* Left Column: Controls */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t('select_project')}</Label>
                <Select defaultValue="alpha">
                  <SelectTrigger>
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alpha">Project Alpha</SelectItem>
                    <SelectItem value="beta">Website Redesign</SelectItem>
                    <SelectItem value="gamma">Mobile App v2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t('date_range')}</Label>
                <Select defaultValue="week">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Last 7 Days</SelectItem>
                    <SelectItem value="sprint">Current Sprint</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tone</Label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual & Fun</SelectItem>
                    <SelectItem value="concise">Concise (Bullet points)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="my-4" />

              <Button 
                className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg h-12"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    {t('generate')}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Preview */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <Card className="flex-1 flex flex-col shadow-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30 py-4">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                {t('preview')}
              </CardTitle>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => {
                   navigator.clipboard.writeText(generatedContent);
                   toast({ title: "Copied to clipboard" });
                 }} disabled={!generatedContent}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button size="sm" className="bg-brand-green text-white hover:bg-brand-green/90" disabled={!generatedContent}>
                  <Send className="w-4 h-4 mr-2" />
                  {t('send_newsletter')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 min-h-[400px]">
              {generatedContent ? (
                <Textarea 
                  className="w-full h-full min-h-[400px] resize-none border-0 focus-visible:ring-0 p-6 font-mono text-sm leading-relaxed bg-transparent"
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <h3 className="font-medium text-lg text-foreground">Ready to generate</h3>
                  <p className="max-w-sm mt-2">Select your project settings and click Generate to create your weekly progress report.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { FileText } from "lucide-react";
