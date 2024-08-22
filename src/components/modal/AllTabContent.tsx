import { useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { CategoryType, filterWidget, searchWidgetTerm } from "../../store/atom"
import SearchBar from "../SearchBar"
import { CheckBoxInput } from "./TabsContent"
const AllTabContent = () => {

    const setSearch = useSetRecoilState(searchWidgetTerm)
    const filterDataLoadable = useRecoilValueLoadable(filterWidget)

    return <div>
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
        <div className="space-y-2 mt-2">
            {
                filterDataLoadable.state === 'hasValue' && filterDataLoadable.contents.map(i =>
                    <CheckBoxInput key={i.id} defaultChecked={i.isDisplay} label={i.name} widId={i.id}
                        category={i.category}
                    />)

            }
        </div>
    </div>
}

export default AllTabContent
