const Card = ({ variety }) => {
  return (
    <div className="bg-black p-6 rounded-lg flex justify-center items-center flex-col gap-3 border transition hover:scale-105">
      <img className="w-24" src={variety?.imagePath} alt="Image" />
      <h2 className="font-semibold">{variety?.name}</h2>
      <div className="flex gap-3">
        <button className="px-2 py-1 border border-red-500 rounded-lg text-red-500 transition hover:bg-red-500 hover:text-white">Sıfırla</button>
        <span className="text-2xl">0</span>
        <button className="px-2 py-1 border border-green-500 rounded-lg text-green-500 transition hover:bg-green-500 hover:text-white">Ekle</button>
      </div>
    </div>
  )
}

export default Card