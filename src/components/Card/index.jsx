const Card = ({ variety, addToBasket, clearToBasket, basket }) => {
  return (
    <div className="bg-black p-6 rounded-lg flex justify-center items-center flex-col gap-3 border transition hover:scale-105">
      <img className="w-24" src={variety?.imagePath}  alt="Ice Cream Varieties" />
      <h2 className="font-semibold">{variety?.name}</h2>
      <div className="flex gap-3">
        <button onClick={() => clearToBasket(variety)} className="px-2 py-1 border border-red-500 rounded-lg text-red-500 transition hover:bg-red-500 hover:text-white">Sıfırla</button>
        <span data-testid='cardValue' className="text-2xl">{(basket?.filter((item) => item.id === variety.id)).length}</span>
        <button onClick={() => addToBasket(variety)} className="px-2 py-1 border border-green-500 rounded-lg text-green-500 transition hover:bg-green-500 hover:text-white">Ekle</button>
      </div>
    </div>
  )
}

export default Card