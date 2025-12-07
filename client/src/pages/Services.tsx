import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Server, Shield, Smartphone, PenTool, Code, Check } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "web-dev",
      category: "development",
      title: "Web Development Package",
      price: "$999",
      description: "Full-stack web application with admin dashboard and CMS.",
      features: ["Custom Design", "React & Node.js", "SEO Optimized", "CMS Integration"],
      popular: true
    },
    {
      id: "mobile-app",
      category: "development",
      title: "Mobile App MVP",
      price: "$2,499",
      description: "Cross-platform mobile app (iOS & Android) with core functionalities.",
      features: ["Flutter/React Native", "User Authentication", "Push Notifications", "App Store Setup"],
      popular: false
    },
    {
      id: "cloud-setup",
      category: "infrastructure",
      title: "Cloud Infrastructure Setup",
      price: "$499",
      description: "Secure and scalable cloud environment setup on AWS or Azure.",
      features: ["Server Configuration", "Database Setup", "Security Groups", "Auto-scaling"],
      popular: false
    },
    {
      id: "security-audit",
      category: "security",
      title: "Security Audit",
      price: "$799",
      description: "Comprehensive security assessment of your digital assets.",
      features: ["Vulnerability Scan", "Penetration Testing", "Compliance Check", "Detailed Report"],
      popular: true
    },
    {
      id: "ui-design",
      category: "design",
      title: "UI/UX Design Sprint",
      price: "$1,200",
      description: "Rapid prototyping and high-fidelity design for your product.",
      features: ["User Research", "Wireframing", "Interactive Prototype", "Design System"],
      popular: false
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Service Catalog</h1>
          <p className="text-muted-foreground mt-2">Browse and order professional services for your business.</p>
        </div>
        <Button className="bg-brand-orange text-white hover:bg-brand-orange/90">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart (0)
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="development" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.category === "development").map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.category === "infrastructure").map((service) => (
               <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.category === "security").map((service) => (
               <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="design" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.category === "design").map((service) => (
               <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  const getIcon = (category: string) => {
    switch (category) {
      case "development": return <Code className="w-5 h-5" />;
      case "infrastructure": return <Server className="w-5 h-5" />;
      case "security": return <Shield className="w-5 h-5" />;
      case "design": return <PenTool className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <Card className={`flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 ${service.popular ? 'border-brand-orange' : 'border-brand-teal'}`}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-muted text-muted-foreground flex gap-1 items-center">
            {getIcon(service.category)}
            <span className="capitalize">{service.category}</span>
          </Badge>
          {service.popular && (
            <Badge className="bg-brand-orange hover:bg-brand-orange text-white">Popular</Badge>
          )}
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-2xl font-bold text-brand-teal mb-6">
          {service.price} <span className="text-sm font-normal text-muted-foreground">/ project</span>
        </div>
        <ul className="space-y-2 text-sm">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-4 h-4 text-brand-teal" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">Order Now</Button>
      </CardFooter>
    </Card>
  );
}
