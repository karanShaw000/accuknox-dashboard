import { useRecoilState, useRecoilValue } from "recoil"
import { CategoryTabsAtom, CategoryType, TabType, WidgetCategoryAtomFamily } from "../../store/atom"
import TabsContent from "./TabsContent"
import AllTabContent from "./AllTabContent"

const ModalContent = () => {
    const activeTab = useRecoilValue(CategoryTabsAtom)
    return (
        <div>
            <div className="flex justify-start items-center mb-4">
                <Tab TabCategory="search" title="Search" />
                <Tab TabCategory="cspm" title="CSPM" />
                <Tab TabCategory="cwpp" title="CWPP" />
                <Tab TabCategory="image" title="Image" />
                <Tab TabCategory="ticket" title="Ticket" />

            </div>
            <div className="px-2">
                {
                    activeTab === "search" && <AllTabContent />
                }
                {
                    activeTab !== "search" && <TabsContent category={activeTab} />
                }
            </div>
        </div>
    )
}
export default ModalContent

const Tab = ({ TabCategory, title }: { TabCategory: TabType, title: string }) => {
    const [activeTab, setActiveTab] = useRecoilState(CategoryTabsAtom)
    return <button className={`px-4 md:px-8 py-2 text-sm  md:text-base transition-colors ${activeTab === TabCategory ? "border-b-2 border-bluish text-bluish font-bold" : "border-accent  border-b text-secondary"}`}
        onClick={() => setActiveTab(TabCategory)}>{title}</button>

}



