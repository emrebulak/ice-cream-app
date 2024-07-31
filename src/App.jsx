import Form from "./components/Form"
import Toppings from "./components/Toppings"
import Varieties from "./components/Varieties"

const App = () => {
  return (
    <div className="bg-[#242424] text-white min-h-screen px-10 py-8 flex flex-col gap-6">
      <Varieties />
      <Toppings />
      <Form />
    </div>
  )
}

export default App