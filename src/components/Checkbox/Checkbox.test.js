import { render, screen } from "@testing-library/react"
import Checkbox from "."
import { MOCK_TOPPINGS } from "../../constants/mocks"
import userEvent from "@testing-library/user-event"

describe('Checkbox', () => {

    test('should render correctly', () => {

        render(<Checkbox toppings={MOCK_TOPPINGS[0]} setBasket={()=> {}}/>)

        const checkImage = screen.getByRole('img', {alt: 'Ice Cream Toppings'})
        const checkName = screen.getByText(MOCK_TOPPINGS[0].name)

        expect(checkImage).toHaveAttribute('src', MOCK_TOPPINGS[0].imagePath)
        expect(checkName).toHaveTextContent(MOCK_TOPPINGS[0].name)
    })

    test('should add toppings to basket', async () => {
        const user = userEvent.setup();
        const setBasket = jest.fn()

        render(<Checkbox toppings={MOCK_TOPPINGS[0]} setBasket={setBasket}/>)

        const checkInput = screen.getByRole('checkbox')
        const label = screen.getByTestId('checkLabel')
        expect(label).not.toHaveClass('box-shadow')

        await user.click(checkInput)
        
        expect(label).toHaveClass('box-shadow')
        expect(setBasket).toHaveBeenCalledTimes(1)

    })

})