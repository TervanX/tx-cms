import { Incident } from "@/app/developers/developer-tools/system-status/page";

interface IncidentHistoryProps {
    incidents: Incident[];
}

const impactColors = {
    critical: 'bg-red-100 text-red-800',
    major: 'bg-orange-100 text-orange-800',
    minor: 'bg-yellow-100 text-yellow-800',
    none: 'bg-gray-100 text-gray-800'
};

const statusColors = {
    investigating: 'bg-red-100 text-red-800',
    identified: 'bg-orange-100 text-orange-800',
    monitoring: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800'
};

export default function IncidentHistory({ incidents }: IncidentHistoryProps) {
    if (incidents.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident History</h3>
                <div className="text-center py-8">
                    <div className="text-green-500 text-4xl mb-4">✅</div>
                    <p className="text-gray-600">No ongoing incidents</p>
                    <p className="text-sm text-gray-500 mt-1">All systems are running smoothly</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident History</h3>
            <div className="space-y-4">
                {incidents.map((incident) => (
                    <div key={incident.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{incident.title}</h4>
                            <div className="flex space-x-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${impactColors[incident.impact]}`}>
                                    {incident.impact}
                                </span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[incident.status]}`}>
                                    {incident.status}
                                </span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 mb-3">
                            Started: {new Date(incident.started).toLocaleString()}
                            {incident.resolved && ` • Resolved: ${new Date(incident.resolved).toLocaleString()}`}
                        </div>

                        <div className="space-y-2">
                            <h5 className="text-sm font-medium text-gray-700">Updates:</h5>
                            {incident.updates.map((update, index) => (
                                <div key={index} className="text-sm border-l-2 border-gray-200 pl-3">
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-700">{update.status}</span>
                                        <span className="text-gray-500">{new Date(update.time).toLocaleTimeString()}</span>
                                    </div>
                                    <p className="text-gray-600 mt-1">{update.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}