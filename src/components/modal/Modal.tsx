import { useSetRecoilState } from "recoil"
import { AddWidgetToggleModal } from "../../store/atom"
import { X } from "lucide-react"
import ModalContent from "./ModalContent"
import AddWidgetForm from "./AddWidgetForm"

const Modal = () => {
    const setIsOpen = useSetRecoilState(AddWidgetToggleModal)

    return <div className=" h-screen w-screen fixed  top-0 left-0 z-50  bg-black bg-opacity-50">
        <div className=" fixed top-0 right-0 h-screen w-full lg:w-1/2 bg-secondary ">
            <div className="flex justify-between items-center mb-4 bg-bluish text-white p-2">
                <h2 className="text-xl font-bold">Add Widget</h2>
                <button onClick={() => setIsOpen(false)} >
                    <X />
                </button>
            </div>
            <div className="px-4 space-y-4">
                <p className="text-primary">Personalise your dashboard by adding the following </p>
                <AddWidgetForm />
                <ModalContent />
            </div>
        </div>
    </div>
}
export default Modal
