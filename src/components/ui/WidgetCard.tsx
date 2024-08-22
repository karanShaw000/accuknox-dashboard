import { FC, HTMLAttributes } from "react"
import Button from "./Button"
import { X } from "lucide-react"
import { CategoryType, WidgetCategoryAtomFamily } from "../../store/atom"
import { useRecoilState, useSetRecoilState } from "recoil"
import axios from "axios"

interface WidgetCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string,
    text: string,
    category: CategoryType
    widId: string
}
const WidgetCard: FC<WidgetCardProps> = ({ category, widId, name, text, ...props }) => {
    const [widgetData, useWidgetData] = useRecoilState(WidgetCategoryAtomFamily(category))

    const removeWidget = async () => {
        const index = widgetData.findIndex((listItem) => listItem.id === widId);
        const widget = widgetData[index]
        const newWidget = { ...widget, isDisplay: !widget.isDisplay }
        useWidgetData([...widgetData.slice(0, index), newWidget, ...widgetData.slice(index + 1)])
        await axios.put(`http://localhost:8000/widget/${widId}`, newWidget)


    }
    return (
        <>
            <div {...props} className="bg-secondary shadow-sm rounded-lg h-full min-h-72 p-4 grid grid-rows-2">
                <div className="flex justify-between items-center self-start">

                    <h1 className=" md:text-lg font-bold text-primary">{name}</h1>
                    <Button onClick={removeWidget}><X /></Button>
                </div>
                <p className=" text-secondary justify-self-center">{text}</p>
            </div>
        </>
    )
}

export default WidgetCard

