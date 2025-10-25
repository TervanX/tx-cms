import { SystemStatus } from "@/app/developers/developer-tools/system-status/page";

interface StatusGridProps {
    systems: SystemStatus[];
}

const statusColors = {
    operational: 'bg-green-500',
    degraded: 'bg-yellow-500',
    outage: 'bg-red-500',
    maintenance: 'bg-blue-500'
};

const statusLabels = {
    operational: 'Operational',
    degraded: 'Degraded',
    outage: 'Outage',
    maintenance: 'Maintenance'
};

export default function StatusGrid({ systems }: StatusGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systems.map((system) => (
                <div key={system.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{system.name}</h3>
                        <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${statusColors[system.status]}`}></div>
                            <span className="text-sm font-medium text-gray-600">
                                {statusLabels[system.status]}
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{system.description}</p>

                    <div className="space-y-2 text-sm">
                        {system.responseTime && (
                            <div className="flex justify-between">
                                <span className="text-gray-500">Response Time:</span>
                                <span className="font-medium">{system.responseTime}ms</span>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <span className="text-gray-500">Uptime:</span>
                            <span className="font-medium">{system.uptime}%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Last Updated:</span>
                            <span className="font-medium">
                                {new Date(system.lastUpdated).toLocaleTimeString()}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}