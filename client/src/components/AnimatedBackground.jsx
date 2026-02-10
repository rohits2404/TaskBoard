export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50"></div>
      
            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
            {/* Animated circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                }}
                />
            ))}
        </div>
    );
};