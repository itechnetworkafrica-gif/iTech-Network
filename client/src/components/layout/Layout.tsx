import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Blocks, 
  FileText, 
  Settings, 
  LogOut, 
  Bell,
  Globe,
  Home,
  ShoppingCart
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: 'dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'services', href: '/dashboard/services', icon: ShoppingCart },
    { name: 'integrations', href: '/dashboard/integrations', icon: Blocks },
    { name: 'reports', href: '/dashboard/reports', icon: FileText },
    { name: 'settings', href: '/dashboard/settings', icon: Settings },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col fixed h-full inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border cursor-pointer">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-bold">iT</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Client Portal</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}>
                  <item.icon className="w-5 h-5" />
                  {t(item.name)}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-sidebar-border space-y-2">
          <Link href="/">
            <button className="flex items-center gap-3 px-3 py-2.5 w-full text-sidebar-foreground/70 hover:text-white transition-colors text-sm font-medium">
              <Home className="w-5 h-5" />
              Back to Website
            </button>
          </Link>
          <button className="flex items-center gap-3 px-3 py-2.5 w-full text-sidebar-foreground/70 hover:text-destructive transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64 flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-background border-b px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center text-muted-foreground text-sm">
            {/* Breadcrumbs could go here */}
          </div>

          <div className="flex items-center gap-4">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')}>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-teal rounded-full border-2 border-background"></span>
            </Button>

            <div className="h-8 w-px bg-border mx-2"></div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium leading-none">Alex Morgan</p>
                <p className="text-xs text-muted-foreground mt-1">alex@itech.africa</p>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
