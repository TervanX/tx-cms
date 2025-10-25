interface StatusHeaderProps {
    overallStatus: 'operational' | 'degraded' | 'outage' | 'maintenance';
    lastUpdated: string;
}

const statusConfig = {
    operational: {
        label: 'All Systems Operational',
        color: 'bg-green-100 text-green-800',
        icon: '✅'
    },
    degraded: {
        label: 'System Degradation',
        color: 'bg-yellow-100 text-yellow-800',
        icon: '⚠️'
    },
    outage: {
        label: 'Service Outage',
        color: 'bg-red-100 text-red-800',
        icon: '❌'
    },
    maintenance: {
        label: 'Maintenance in Progress',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔧'
    }
};

export default function StatusHeader({ overallStatus, lastUpdated }: StatusHeaderProps) {
    const config = statusConfig[overallStatus];

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">{config.icon}</span>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">TervanX Status</h1>
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
                                    {config.label}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                        <p>Real-time monitoring</p>
                        <p>Updated {new Date(lastUpdated).toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}