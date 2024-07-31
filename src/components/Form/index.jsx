import { useState } from "react"

const Form = () => {

    const [isCheck, setIsCheck] = useState(false)
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="flex justify-center items-center mt-3 gap-4 relative">
            <p className={`absolute -top-10 bg-slate-100 text-black py-1 px-2 rounded-lg transition-all ${isCheck && isHover ? 'visible' : 'hidden'}`}>Size gerçekten bir şey teslim etmeyeceğiz</p>
            <div className="flex gap-3 items-center">
                <input onChange={() => setIsCheck(!isCheck)} className="size-4" id="checkInp" type="checkbox" />
                <label className="text-zinc-400" htmlFor="checkInp">Koşulları okudum ve kabul ediyorum </label>
            </div>


            <button disabled={!isCheck} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="bg-blue-500 py-2 px-3 rounded-lg transition hover:bg-blue-700 disabled:bg-blue-900">Siparişi Onayla</button>

        </div>
    )
}

export default Form