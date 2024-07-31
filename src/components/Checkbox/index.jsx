import { useState } from "react"

const Checkbox = ({ toppings, setBasket }) => {

    const [checked, setChecked] = useState(false)

    const handleChange= ()=>{
        setChecked(!checked)
        if (checked) {
            setBasket(prev=>prev.filter(item=>item.id!==toppings.id))
            return
        }
        setBasket(prev=>[...prev,toppings])
    }

    return (
        <label data-testid='checkLabel' className={`bg-black p-6 rounded-lg flex justify-center items-center flex-col gap-3 border transition hover:scale-105 ${checked && 'box-shadow'}`} htmlFor={toppings?.name}>

            <img className="w-20" src={toppings?.imagePath} alt="Ice Cream Toppings" />
            <h2 className="font-semibold line-clamp-1">{toppings?.name}</h2>

            <input className="hidden" onChange={handleChange} id={toppings?.name} type="checkbox" />
        </label>
    )
}

export default Checkbox