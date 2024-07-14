import { useEffect, useState } from "react"
import { getToppings } from "../../service/toppings"    
import Checkbox from "../Checkbox"

const Toppings = () => {

    const [toppings, setToppings] = useState([])
    useEffect(() => {
        getToppings().then((response) => {
            setToppings(response?.data)
        })
    }, [])

    return (
        <div className="flex gap-3 flex-col">
        <h2 className="text-3xl font-semibold">Sos Çeşitleri</h2>
        <h3 className="text-lg">Tanesi <span className="text-green-500">3</span> ₺</h3>
        <h2 className="text-2xl">Soslar Ücreti <span className="text-green-500">0</span> ₺</h2>

        <div className="mt-2 grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
            {
                toppings.length > 0
                    ?
                    toppings?.map((toppings) => (
                        <Checkbox key={toppings?.id} toppings={toppings} />
                    ))
                    : <p>Yükleniyor...</p>
            }
        </div>

    </div>
    )
}

export default Toppings