import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FileCheck, Activity, Clock, TrendingUp, FileText, Plus, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const data = [
  { name: 'Mon', reports: 4 },
  { name: 'Tue', reports: 3 },
  { name: 'Wed', reports: 7 },
  { name: 'Thu', reports: 5 },
  { name: 'Fri', reports: 8 },
  { name: 'Sat', reports: 2 },
  { name: 'Sun', reports: 1 },
];

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{t('dashboard')}</h1>
          <p className="text-muted-foreground mt-2">{t('welcome')}, here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/reports">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </Link>
          <Link href="/dashboard/services">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-brand-teal shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('active_projects')}
            </CardTitle>
            <Activity className="h-4 w-4 text-brand-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              +2 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-brand-orange shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('reports_generated')}
            </CardTitle>
            <FileCheck className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">145</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('next_due')}
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Friday</div>
            <p className="text-xs text-muted-foreground mt-1">
              Weekly Digest due in 2 days
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Orders
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-brand-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently processing
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>{t('overview')}</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="reports" fill="var(--color-brand-teal)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>{t('recent_activity')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { type: 'report', title: 'Weekly Report Generated', desc: 'Project Alpha', time: '2 hours ago', status: 'Sent' },
                { type: 'order', title: 'New Service Order', desc: 'Security Audit', time: '5 hours ago', status: 'Processing' },
                { type: 'integration', title: 'Jira Connected', desc: 'Integration setup', time: '1 day ago', status: 'Active' },
                { type: 'report', title: 'Monthly Summary', desc: 'Project Beta', time: '2 days ago', status: 'Sent' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className={`h-9 w-9 rounded-full flex items-center justify-center border shrink-0 ${
                    item.type === 'order' ? 'bg-orange-50 border-orange-100 text-brand-orange' : 
                    item.type === 'integration' ? 'bg-blue-50 border-blue-100 text-blue-500' : 
                    'bg-muted border-border text-muted-foreground'
                  }`}>
                    {item.type === 'order' ? <Activity className="h-4 w-4" /> : 
                     item.type === 'integration' ? <CheckCircle2 className="h-4 w-4" /> :
                     <FileText className="h-4 w-4" />}
                  </div>
                  <div className="ml-4 space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.desc} • {item.time}
                    </p>
                  </div>
                  <div className={`ml-auto font-medium text-xs ${
                    item.status === 'Processing' ? 'text-brand-orange' : 
                    item.status === 'Active' ? 'text-green-600' :
                    'text-brand-teal'
                  }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
