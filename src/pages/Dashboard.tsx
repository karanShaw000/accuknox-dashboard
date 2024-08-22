import { useRecoilValue } from "recoil";
import Header from "../components/dashboard/Header";
import { AddWidgetToggleModal } from "../store/atom";
import Modal from "../components/modal/Modal";
import DashboardGrid from "../components/dashboard/DashboardGrid";

export default function Dashboard() {
    const isOpen = useRecoilValue(AddWidgetToggleModal)
    return (
        <>
            <div>
                {
                    isOpen && <Modal />
                }
            </div>

            <section className="space-y-2">
                <Header />
                <DashboardGrid title="CSPM Executive Dashboard" category="cspm" />
                <DashboardGrid title="CWPP Dashboard" category="cwpp" />
                <DashboardGrid title="Image Dashboard" category="image" />
                <DashboardGrid title="Ticket Dashboard" category="ticket" />
            </section>
        </>)
}
