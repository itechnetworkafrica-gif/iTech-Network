import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "dashboard": "Dashboard",
      "integrations": "Integrations",
      "reports": "Reports",
      "settings": "Settings",
      "generate_report": "Generate Report",
      "connect": "Connect",
      "connected": "Connected",
      "disconnect": "Disconnect",
      "welcome": "Welcome back",
      "overview": "Overview",
      "recent_activity": "Recent Activity",
      "active_projects": "Active Projects",
      "reports_generated": "Reports Generated",
      "next_due": "Next Report Due",
      "select_project": "Select Project",
      "date_range": "Date Range",
      "generate": "Generate",
      "preview": "Preview",
      "send_newsletter": "Send to Newsletter",
      "language": "Language",
      "profile": "Profile",
      "services": "Services"
    }
  },
  fr: {
    translation: {
      "dashboard": "Tableau de bord",
      "integrations": "Intégrations",
      "reports": "Rapports",
      "settings": "Paramètres",
      "generate_report": "Générer le rapport",
      "connect": "Connecter",
      "connected": "Connecté",
      "disconnect": "Déconnecter",
      "welcome": "Bon retour",
      "overview": "Aperçu",
      "recent_activity": "Activité récente",
      "active_projects": "Projets actifs",
      "reports_generated": "Rapports générés",
      "next_due": "Prochain rapport",
      "select_project": "Sélectionner un projet",
      "date_range": "Plage de dates",
      "generate": "Générer",
      "preview": "Aperçu",
      "send_newsletter": "Envoyer à la newsletter",
      "language": "Langue",
      "profile": "Profil",
      "services": "Services"
    }
  },
  es: {
    translation: {
      "dashboard": "Panel de control",
      "integrations": "Integraciones",
      "reports": "Informes",
      "settings": "Configuración",
      "generate_report": "Generar informe",
      "connect": "Conectar",
      "connected": "Conectado",
      "disconnect": "Desconectar",
      "welcome": "Bienvenido de nuevo",
      "overview": "Resumen",
      "recent_activity": "Actividad reciente",
      "active_projects": "Proyectos activos",
      "reports_generated": "Informes generados",
      "next_due": "Próximo informe",
      "select_project": "Seleccionar proyecto",
      "date_range": "Rango de fechas",
      "generate": "Generar",
      "preview": "Vista previa",
      "send_newsletter": "Enviar al boletín",
      "language": "Idioma",
      "profile": "Perfil",
      "services": "Servicios"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
