import { useRecoilValueLoadable } from "recoil"
import WidgetCard from "../ui/WidgetCard"
import DashboardSkeleton from "./DashboardSkeleton"
import Card from "../ui/Card"
import AddWigetButton from "./AddWigetButton"
import { CategoryType, WidgetCategoryAtomFamily } from '../../store/atom'

const DashboardGrid = ({ title, category }: { title: string, category: CategoryType }) => {
    const widgetLoadable = useRecoilValueLoadable(WidgetCategoryAtomFamily(category))

    return (
        <div className="px-2">
            <p className="font-bold text-primary md:text-lg mb-2">{title}</p>

            {
                widgetLoadable.state === 'hasValue' && (

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            widgetLoadable.contents.map(item => {
                                if (!item.isDisplay) return null
                                return <WidgetCard category={category} key={item.id} name={item.name} text={item.text} widId={item.id} />
                            })
                        }
                        <Card>
                            <AddWigetButton category={category} />
                        </Card >
                    </div>
                )
            }

            {
                widgetLoadable.state === 'loading' && <DashboardSkeleton />

            }


        </div>
    )
}

export default DashboardGrid


