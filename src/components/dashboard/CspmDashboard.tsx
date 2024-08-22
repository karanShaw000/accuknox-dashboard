import { useRecoilValueLoadable } from "recoil"
import { CspmState } from "../../store/atom"
import WidgetCard from "../ui/WidgetCard"
import DashboardSkeleton from "./DashboardSkeleton"
import Card from "../ui/Card"
import AddWigetButton from "./AddWigetButton"

const CspmDashboard = () => {
    const cspmLoadable = useRecoilValueLoadable(CspmState)

    return (
        <div className="px-2">
            <p className="font-bold text-primary md:text-lg mb-2">CSPM Executive Dashboard</p>

            {
                cspmLoadable.state === 'hasValue' && (

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            cspmLoadable.contents.map(item => <WidgetCard key={item.id} name={item.name} text={item.text} widId={item.id} />)
                        }
                        <Card>
                            <AddWigetButton />
                        </Card >
                    </div>
                )
            }

            {
                cspmLoadable.state === 'loading' && <DashboardSkeleton />

            }


        </div>
    )
}

export default CspmDashboard


