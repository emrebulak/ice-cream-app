import { useEffect, useState } from "react"
import Card from "../Card"
import { getVarieties } from "../../service/varieties"

const Varieties = () => {
    const [varieties, setVarieties] = useState([])
    useEffect(() => {
        getVarieties().then((response) => {
            setVarieties(response?.data)
        })
    }, [])

    return (
        <div className="flex gap-3 flex-col">
            <h2 className="text-3xl font-semibold">Dondurma Çeşitleri</h2>
            <h3 className="text-lg">Tanesi <span className="text-green-500">20</span> ₺</h3>
            <h2 className="text-2xl">Çeşitler Ücreti <span className="text-green-500">0</span> ₺</h2>

            <div className="mt-2 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    varieties.length > 0
                        ?
                        varieties?.map((variety) => (
                            <Card key={variety?.id} variety={variety} />
                        ))
                        : <p>Yükleniyor...</p>
                }
            </div>

        </div>
    )
}

export default Varieties