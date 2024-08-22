import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ ...props }, ref) => {
        return <button className="rounded-md px-2.5 py-1 border-primary text-secondary border hover:bg-primary  shadow-md bg-secondary flex justify-between items-center gap-2
        " {...props} ref={ref} />

    }
)
export default Button
