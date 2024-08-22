import { useRecoilState } from "recoil"
import { CategoryType, WidgetCategoryAtomFamily } from "../../store/atom"
import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react"
import axios from "axios"

const TabsContent = ({ category }: { category: Exclude<CategoryType, "all"> }) => {
    const [widgetData, setWidgetData] = useRecoilState(WidgetCategoryAtomFamily(category))
    return (
        <div className="space-y-4">
            {
                widgetData.map(data => <CheckBoxInput key={data.id} label={data.name} widId={data.id} category={data.category} defaultChecked={data.isDisplay} />)
            }
        </div>
    )
}

export default TabsContent

interface CheckBoxInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    category: CategoryType
    widId: string,
}

export const CheckBoxInput = forwardRef<HTMLInputElement, CheckBoxInputProps>(
    ({ widId, category, label, ...props }, ref) => {

        const [widgetData, useWidgetData] = useRecoilState(WidgetCategoryAtomFamily(category))

        const removeWidget = async (e: ChangeEvent<HTMLInputElement>) => {
            const index = widgetData.findIndex((listItem) => listItem.id === widId);
            const widget = widgetData[index]
            const newWidget = { ...widget, isDisplay: e.target.checked }
            useWidgetData([...widgetData.slice(0, index), newWidget, ...widgetData.slice(index + 1)])
            await axios.post(`http://localhost:8000/widget/${widId}`, newWidget)
        }

        return (
            <div className="flex items-center space-x-2 border border-accent p-2">
                <input {...props} onChange={e => removeWidget(e)} ref={ref} type="checkbox" id="terms" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                <label className="text-sm font-medium">
                    {label}
                </label>
            </div>
        )
    }
)

