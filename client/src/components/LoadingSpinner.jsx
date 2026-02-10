export const LoadingSpinner = ({ size = 'md' }) => {
  
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    return (
        <div className="flex justify-center items-center">
            <div className={`${sizeClasses[size]} relative`}>
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin"></div>
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border-4 border-gray-300 dark:border-gray-600"></div>
                {/* Center dot */}
                <div className="absolute inset-4 rounded-full bg-linear-to-r from-primary-500 to-purple-500 animate-pulse"></div>
            </div>
        </div>
    );
};