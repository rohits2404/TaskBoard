export const StatsCard = ({ title, value, icon, color, change }) => {
    return (
        <div className="dashboard-card">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-linear-to-r ${color} bg-opacity-10`}>
                    <div className={`text-white`}>
                        {icon}
                    </div>
                </div>
                <span className="text-sm font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                    {change}
                </span>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-1">{value}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
            </div>
        </div>
    );
};