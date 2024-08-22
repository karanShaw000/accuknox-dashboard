import { ReactNode } from "react"


const Card = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="bg-secondary shadow-sm rounded-lg max-w-2xl py-32 flex justify-center items-center">
                {children}
            </div>
        </>
    )
}

export default Card
