import { useRecoilValueLoadable } from "recoil"
import WidgetCard from "../ui/WidgetCard"
import DashboardSkeleton from "./DashboardSkeleton"
import Card from "../ui/Card"
import AddWigetButton from "./AddWigetButton"
import { TicketState } from "../../store/atom"

const TicketDashboard = () => {
    const ticketLoadable = useRecoilValueLoadable(TicketState)

    return (
        <div className="px-2">
            <p className="font-bold text-primary md:text-lg mb-2">Ticket Dashboard</p>

            {
                ticketLoadable.state === 'hasValue' && (

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            ticketLoadable.contents.map(item => <WidgetCard key={item.id} name={item.name} text={item.text} widId={item.id} />)
                        }
                        <Card>
                            <AddWigetButton />
                        </Card >
                    </div>
                )
            }

            {
                ticketLoadable.state === 'loading' && <DashboardSkeleton />

            }


        </div>
    )
}

export default TicketDashboard


