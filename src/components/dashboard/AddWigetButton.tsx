import { Plus } from "lucide-react"
import Button from "../ui/Button"
import { useSetRecoilState } from "recoil"
import { AddWidgetToggleModal, CategoryTabsAtom, CategoryType } from "../../store/atom"

const AddWigetButton = ({ category }: { category: CategoryType }) => {
    const setIsOpen = useSetRecoilState(AddWidgetToggleModal)
    const setActiveTab = useSetRecoilState(CategoryTabsAtom)
    return <Button onClick={() => {
        setIsOpen(true)
        setActiveTab(category)
    }}>Add Widget <Plus /></Button>
}

export default AddWigetButton
