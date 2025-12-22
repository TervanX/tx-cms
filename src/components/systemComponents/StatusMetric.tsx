import { SystemStatus } from "@/app/developers/developer-tools/system-status/page";

interface StatusMetricsProps {
    systems: SystemStatus[];
}

export default function StatusMetrics({ systems }: StatusMetricsProps) {
    const totalUptime = systems.reduce((acc, system) => acc + system.uptime, 0) / systems.length;
    const operationalSystems = systems.filter(s => s.status === 'operational').length;
    const totalSystems = systems.length;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">System Metrics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{totalUptime.toFixed(2)}%</div>
                    <p className="text-sm text-gray-600 mt-1">Average Uptime</p>
                </div>

                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                        {operationalSystems}/{totalSystems}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Systems Operational</p>
                </div>

                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600">
                        {systems.filter(s => s.responseTime && s.responseTime < 100).length}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Systems &lt;100ms Response</p>
                </div>
            </div>

            {/* Response Time Chart */}
            <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-4">Average Response Times</h4>
                <div className="space-y-3">
                    {systems.filter(s => s.responseTime).map((system) => (
                        <div key={system.id} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{system.name}</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${system.responseTime! < 100 ? 'bg-green-500' :
                                                system.responseTime! < 200 ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                        style={{ width: `${Math.min((system.responseTime! / 300) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm font-medium w-12 text-right">
                                    {system.responseTime}ms
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}