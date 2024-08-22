import WidgetCardSkeleton from "../ui/WidgetCardSkeleton"

const DashboardSkeleton = () => {
    return <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <WidgetCardSkeleton />
        <WidgetCardSkeleton />
        <WidgetCardSkeleton />
    </div>
}
export default DashboardSkeleton
