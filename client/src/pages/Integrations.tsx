import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink } from "lucide-react";

export default function Integrations() {
  const { t } = useTranslation();

  const integrations = [
    {
      name: "Jira",
      description: "Connect your Jira projects to automatically pull task status updates and completion metrics.",
      connected: true,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/1200px-Jira_Logo.svg.png" // Using a mock URL, in real app I'd use local or reliable assets
    },
    {
      name: "Trello",
      description: "Sync Trello boards to generate summaries of cards moved to Done.",
      connected: false,
    },
    {
      name: "Asana",
      description: "Import Asana tasks and milestones for your weekly project digest.",
      connected: false,
    },
    {
      name: "Slack",
      description: "Post your generated newsletters directly to a Slack channel.",
      connected: true,
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{t('integrations')}</h1>
        <p className="text-muted-foreground mt-2">Manage your connections to project management tools.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.name} className="flex flex-col overflow-hidden border shadow-sm hover:shadow-md transition-all">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-xl font-bold text-muted-foreground">
                  {integration.name[0]}
                </div>
                {integration.connected && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 gap-1">
                    <Check className="w-3 h-3" />
                    {t('connected')}
                  </Badge>
                )}
              </div>
              <CardTitle>{integration.name}</CardTitle>
              <CardDescription className="mt-2">{integration.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-0">
              {integration.connected ? (
                <Button variant="outline" className="w-full border-destructive/20 text-destructive hover:bg-destructive/10 hover:text-destructive">
                  {t('disconnect')}
                </Button>
              ) : (
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                  {t('connect')} <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
