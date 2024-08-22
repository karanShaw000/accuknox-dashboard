import { useRecoilValueLoadable } from "recoil"
import WidgetCard from "../ui/WidgetCard"
import DashboardSkeleton from "./DashboardSkeleton"
import Card from "../ui/Card"
import AddWigetButton from "./AddWigetButton"
import { ImageState } from "../../store/atom"

const ImageDashboard = () => {
    const imageLoadable = useRecoilValueLoadable(ImageState)

    return (
        <div className="px-2">
            <p className="font-bold text-primary md:text-lg mb-2">Image Dashboard</p>

            {
                imageLoadable.state === 'hasValue' && (

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            imageLoadable.contents.map(item => <WidgetCard key={item.id} name={item.name} text={item.text} widId={item.id} />)
                        }
                        <Card>
                            <AddWigetButton />
                        </Card >
                    </div>
                )
            }

            {
                imageLoadable.state === 'loading' && <DashboardSkeleton />

            }


        </div>
    )
}

export default ImageDashboard


