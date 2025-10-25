import { Maintenance } from "@/app/developers/developer-tools/system-status/page";

interface MaintenanceScheduleProps {
    maintenance: Maintenance[];
}

const statusColors = {
    scheduled: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800'
};

export default function MaintenanceSchedule({ maintenance }: MaintenanceScheduleProps) {
    if (maintenance.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Maintenance</h3>
                <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-4">🔧</div>
                    <p className="text-gray-600">No scheduled maintenance</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Maintenance</h3>
            <div className="space-y-4">
                {maintenance.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[item.status]}`}>
                                {item.status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                        <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Start:</span>
                                <span className="font-medium">{new Date(item.start).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">End:</span>
                                <span className="font-medium">{new Date(item.end).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Components:</span>
                                <span className="font-medium">{item.components.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}