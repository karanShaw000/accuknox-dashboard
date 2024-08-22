import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export type CategoryType = 'cspm' | 'cwpp' | 'image' | 'ticket'
export type TabType = 'cspm' | 'cwpp' | 'image' | 'ticket' | 'search'

export type WidgetData = {
    id: string,
    name: string,
    text: string
    isDisplay: boolean
    category: CategoryType
}

export const AllWidgetAtom = atom<WidgetData[]>({
    key: 'AllWidgetAtom',
    default: selector({
        key: 'AllWidgetAtom/Default',
        get: async () => {
            const res = await axios.get('http://localhost:8000/widget')
            return res.data
        }
    })
})
export const searchWidgetTerm = atom({
    key: 'searchWidgetTerm',
    default: '',
});
export const filterWidget = selector({
    key: 'filterWidget',
    get: ({ get }) => {
        const widgetList = get(AllWidgetAtom);
        const searchTerm = get(searchWidgetTerm)
        if (searchTerm === '') return widgetList
        else {
            return widgetList.filter(({ name }) => {
                return searchTerm && name && name.toLowerCase().includes(searchTerm)
            })
        }
    }
})
export const WidgetCategoryAtomFamily = atomFamily<WidgetData[], CategoryType>({
    key: 'WidgetCategoryAtomFamily',
    default: selectorFamily({
        key: 'WigetCategoryAtomFamily/Default',
        get: (category) => async () => {
            await new Promise((r) => setTimeout(r, 2000))
            const res = await axios.get(`http://localhost:8000/widget`)
            const data: WidgetData[] = res.data
            return data.filter(d => d.category === category)
        }
    })
})

export const CategoryTabsAtom = atom<TabType>({
    key: "CategoryTabsAtom",
    default: 'cspm'
})


export const AddWidgetToggleModal = atom({
    key: 'AddWigetToggleModal',
    default: false
})
