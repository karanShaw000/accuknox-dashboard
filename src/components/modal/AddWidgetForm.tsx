import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { AddWidgetToggleModal, CategoryType, WidgetCategoryAtomFamily, WidgetData } from "../../store/atom"
import axios from "axios"


const AddWidgetForm = () => {

    const setCspm = useSetRecoilState(WidgetCategoryAtomFamily("cspm"))
    const setCwpp = useSetRecoilState(WidgetCategoryAtomFamily("cwpp"))
    const setImage = useSetRecoilState(WidgetCategoryAtomFamily("image"))
    const setTicket = useSetRecoilState(WidgetCategoryAtomFamily("ticket"))

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [cat, setCat] = useState<CategoryType>('cspm')




    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const widgetData = {
            id: crypto.randomUUID(),
            isDisplay: true,
            name,
            text,
            category: cat
        }

        if (cat === 'cspm') {
            setCspm(s => [...s, widgetData])
        } else if (cat === 'cwpp') {
            setCwpp(s => [...s, widgetData])
        } else if (cat === 'image') {
            setImage(s => [...s, widgetData])
        } else {
            setTicket(s => [...s, widgetData])
        }

        //here to post request to make changes in db
        await axios.post('http://localhost:8000/widget', widgetData)


        setName('')
        setText('')
        setCat('cspm')
        console.log(widgetData)
    }


    return (
        <form onSubmit={(e) => submitHandler(e)} className="space-y-4 text-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm md:text-base">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        name="name"
                        className="mt-1  w-full rounded-md bg-primary p-2 text-sm border-2 border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary "
                        placeholder="Enter the Name"
                    />
                </div>
                <div>
                    <label htmlFor="text" className="block text-sm md:text-base">
                        Text
                    </label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id="text"
                        name="text"
                        className="mt-1  w-full rounded-md bg-primary p-2 text-sm border-2 border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary "
                        placeholder="Enter Text"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="category" className="block text-sm md:text-base">
                    Category
                </label>
                <select
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                    id="category"
                    name="category"
                    className="mt-1  w-full rounded-md bg-primary p-2 text-sm border-2 border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary "
                >
                    <option defaultChecked value="cspm">CSPM</option>
                    <option value="cwpp">CWPP</option>
                    <option value="ticket">Ticket</option>
                    <option value="image">Image</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-bluish text-secondary py-2 px-4  rounded-md  text-sm md:text-base hover:bg-bluish/90"
            >
                Add
            </button>
        </form>
    )
}
export default AddWidgetForm
