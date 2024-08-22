
const WidgetCardSkeleton = () => {
    return (
        <>
            <div className="bg-gray-100 shadow-sm rounded-lg max-w-2xl py-32 text-center">
                <div className="animate-pulse">
                    <div className="bg-gray-200 rounded-lg h-8 w-48 mx-auto mb-4" />
                    <div className="bg-gray-200 rounded-lg h-10 w-80 mx-auto" />
                </div>
            </div>
        </>
    )
}

export default WidgetCardSkeleton
