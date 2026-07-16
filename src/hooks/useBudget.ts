import {useContext} from "react"
import {BudgetContext} from "../context/BudgedContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    return context
}