import { fireEvent, render, screen } from "@testing-library/react"
import Form from "."



describe('Form', () => {
    test('Is your form component working correctly', () => {
        render(<Form />)
        const checkbox = screen.getByRole('checkbox')
        const button = screen.getByRole('button')
    
        expect(button).toBeDisabled()
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
    
        expect(button).toBeEnabled()
        expect(checkbox).toBeChecked()
        fireEvent.click(checkbox)

        expect(button).toBeDisabled()
        expect(checkbox).not.toBeChecked()
    })


    test('When hovering over the button, the text is expected to work properly', async () => {
        render(<Form />)
        
        const checkbox = screen.getByRole('checkbox')
        const button = screen.getByRole('button')
        const text = screen.getByText(/size gerçekten/i)

        expect(text).toHaveClass('hidden')
        expect(button).toBeDisabled()
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()
        expect(checkbox).toBeChecked()
        fireEvent.mouseEnter(button)
        expect(text).toHaveClass('visible')
        fireEvent.mouseLeave(button)
        expect(text).toHaveClass('hidden')
        fireEvent.click(checkbox)
        expect(button).toBeDisabled()
        expect(checkbox).not.toBeChecked()
    })

})

