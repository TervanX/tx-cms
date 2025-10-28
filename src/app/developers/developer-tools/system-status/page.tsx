"use client";
import { useState, useEffect } from "react";
import StatusHeader from "@/components/systemComponents/StatusHeader";
import StatusGrid from "@/components/systemComponents/StatusGrid";
import IncidentHistory from "@/components/systemComponents/IncidentHistory";
import MaintenanceSchedule from "@/components/systemComponents/Maintenance";
import StatusMetrics from "@/components/systemComponents/StatusMetric";

export interface SystemStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastUpdated: string;
  responseTime?: number;
  uptime: number;
}

export interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  impact: 'critical' | 'major' | 'minor' | 'none';
  components: string[];
  started: string;
  resolved?: string;
  updates: IncidentUpdate[];
}

export interface IncidentUpdate {
  time: string;
  status: string;
  message: string;
}

export interface Maintenance {
  id: string;
  title: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  components: string[];
  start: string;
  end: string;
  description: string;
}

export default function StatusPage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [maintenance, setMaintenance] = useState<Maintenance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchStatus = async () => {
      setLoading(true);

      // Mock data - replace with actual API calls
      const mockSystemStatus: SystemStatus[] = [
        {
          id: "api",
          name: "API Gateway",
          status: "operational",
          description: "Main API endpoints and authentication",
          lastUpdated: new Date().toISOString(),
          responseTime: 45,
          uptime: 99.98
        },
        {
          id: "payments",
          name: "Payment Processing",
          status: "operational",
          description: "Crypto payment processing and settlement",
          lastUpdated: new Date().toISOString(),
          responseTime: 120,
          uptime: 99.95
        },
        {
          id: "cards",
          name: "Crypto Cards",
          status: "operational",
          description: "Virtual and physical crypto card services",
          lastUpdated: new Date().toISOString(),
          responseTime: 85,
          uptime: 99.97
        },
        {
          id: "compliance",
          name: "Compliance & KYC",
          status: "operational",
          description: "KYC verification and compliance checks",
          lastUpdated: new Date().toISOString(),
          responseTime: 200,
          uptime: 99.90
        },
        {
          id: "infrastructure",
          name: "Blockchain Infrastructure",
          status: "operational",
          description: "Node infrastructure and blockchain connectivity",
          lastUpdated: new Date().toISOString(),
          responseTime: 150,
          uptime: 99.99
        },
        {
          id: "autotrade",
          name: "AutoTrade System",
          status: "operational",
          description: "Automated trading and plugin systems",
          lastUpdated: new Date().toISOString(),
          responseTime: 0,
          uptime: 99.85
        },
        {
          id: "checkout",
          name: "TervanX Checkout",
          status: "operational",
          description: "Payment checkout and merchant tools",
          lastUpdated: new Date().toISOString(),
          responseTime: 75,
          uptime: 99.96
        },
        {
          id: "dashboard",
          name: "Merchant Dashboard",
          status: "operational",
          description: "Business dashboard and analytics",
          lastUpdated: new Date().toISOString(),
          responseTime: 60,
          uptime: 99.98
        }
      ];

      const mockIncidents: Incident[] = [
        {
          id: "inc-001",
          title: "Increased Latency in Compliance Services",
          status: "monitoring",
          impact: "minor",
          components: ["compliance"],
          started: "2024-01-15T10:30:00Z",
          updates: [
            {
              time: "2024-01-15T10:30:00Z",
              status: "investigating",
              message: "We're investigating increased response times in our compliance services."
            },
            {
              time: "2024-01-15T11:15:00Z",
              status: "identified",
              message: "Identified a database optimization issue. Working on a fix."
            },
            {
              time: "2024-01-15T12:00:00Z",
              status: "monitoring",
              message: "Deployed optimizations and monitoring performance improvements."
            }
          ]
        }
      ];

      const mockMaintenance: Maintenance[] = [
        {
          id: "maint-001",
          title: "AutoTrade System Upgrade",
          status: "scheduled",
          components: ["autotrade"],
          start: "2024-01-20T02:00:00Z",
          end: "2024-01-20T04:00:00Z",
          description: "Scheduled maintenance to upgrade AutoTrade algorithms and improve performance."
        }
      ];

      setSystemStatus(mockSystemStatus);
      setIncidents(mockIncidents);
      setMaintenance(mockMaintenance);
      setLoading(false);
    };

    fetchStatus();

    // Refresh every 60 seconds
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const overallStatus = systemStatus.every(s => s.status === 'operational')
    ? 'operational'
    : systemStatus.some(s => s.status === 'outage')
      ? 'outage'
      : systemStatus.some(s => s.status === 'degraded')
        ? 'degraded'
        : 'maintenance';

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading system status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StatusHeader
        overallStatus={overallStatus}
        lastUpdated={new Date().toISOString()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Status</h2>
          <StatusGrid systems={systemStatus} />
        </div>

        {/* Metrics */}
        <div className="mb-12">
          <StatusMetrics systems={systemStatus} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Incidents */}
          <div>
            <IncidentHistory incidents={incidents} />
          </div>

          {/* Maintenance */}
          <div>
            <MaintenanceSchedule maintenance={maintenance} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>Last updated: {new Date().toLocaleString()}</p>
            <p className="mt-2">
              For urgent issues, contact our <a href="/contact/contact" className="text-primary hover:text-primary">support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}