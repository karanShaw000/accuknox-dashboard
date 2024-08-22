import { ChevronRight } from "lucide-react";
import { NavLink, useMatches } from "react-router-dom"

const BreadCrumbs = () => {
    let matches = useMatches();
    let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb());


    return (
        <ol className="max-w-sm flex justify-start items-center gap-1">
            {crumbs.map((crumb, index) => {
                if (index === crumbs.length - 1)
                    return <li key={index}> {crumb} </li>
                else
                    return (
                        <>
                            <li key={index} className="md:text-lg"> {crumb} </li>
                            <ChevronRight className="text-accent" />

                        </>
                    )
            }

            )}
        </ol>
    );

}
export default BreadCrumbs

export const CrumbLink = ({ to, text }: { to: string, text: string }) => {
    return <NavLink to={to}
        className={
            ({ isActive }) => isActive ? "text-primary font-bold" : "text-accent font-bold"
        }>
        {text}
    </NavLink>
}
