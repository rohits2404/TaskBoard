export const ConfirmDeleteModal = ({
    open,
    onClose,
    onConfirm,
    loading,
}) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-2000 flex items-center justify-center">
            {/* backdrop */}
            <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            />

            {/* modal */}
            <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-800 shadow-2xl p-6 animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                    Delete task?
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    This action cannot be undone.
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="btn-secondary"
                        disabled={loading}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};