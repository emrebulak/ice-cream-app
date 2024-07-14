import { useState } from "react"

const Checkbox = ({ toppings }) => {
    console.log("Türler : ", toppings)

    const [checked, setChecked] = useState(false)

    console.log("Checked : ", checked)

    return (
        <label className={`bg-black p-6 rounded-lg flex justify-center items-center flex-col gap-3 border transition hover:scale-105 ${checked && 'box-shadow'}`} htmlFor={toppings?.name}>

            <img className="w-20" src={toppings?.imagePath} alt="Image" />
            <h2 className="font-semibold line-clamp-1">{toppings?.name}</h2>

            <input className="hidden" onChange={()=> setChecked(!checked)} id={toppings?.name} type="checkbox" />
        </label>
    )
}

export default Checkbox