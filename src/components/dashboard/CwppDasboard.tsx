
import { useRecoilValueLoadable } from "recoil"
import WidgetCard from "../ui/WidgetCard"
import DashboardSkeleton from "./DashboardSkeleton"
import Card from "../ui/Card"
import AddWigetButton from "./AddWigetButton"
import { CwppState } from "../../store/atom"

const CwppDashboard = () => {
    const cwppLoadable = useRecoilValueLoadable(CwppState)

    return (
        <div className="px-2">
            <p className="font-bold text-primary md:text-lg mb-2">CWPP Dashboard</p>

            {
                cwppLoadable.state === 'hasValue' && (

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            cwppLoadable.contents.map(item => <WidgetCard key={item.id} name={item.name} text={item.text} widId={item.id} />)
                        }
                        <Card>
                            <AddWigetButton />
                        </Card >
                    </div>
                )
            }

            {
                cwppLoadable.state === 'loading' && <DashboardSkeleton />

            }


        </div>
    )
}

export default CwppDashboard


