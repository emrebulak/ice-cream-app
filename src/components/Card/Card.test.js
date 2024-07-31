import { render, screen } from "@testing-library/react";
import Card from ".";
import { MOCK_VARIETIES } from "../../constants/mocks";
import userEvent from '@testing-library/user-event';

describe('Card', () => {

    test('should render Card component', () => {
        render(<Card variety={MOCK_VARIETIES[0]} addToBasket={() => { }} clearToBasket={() => { }} basket={MOCK_VARIETIES} />);

        const cardImage = screen.getByAltText('Ice Cream Varieties');
        const cardTitle = screen.getByRole('heading');

        expect(cardTitle).toHaveTextContent(MOCK_VARIETIES[0].name);
        expect(cardImage).toHaveAttribute('src', MOCK_VARIETIES[0].imagePath);
    });

    test('buttons on the card item should work properly ', async () => {

        const user = userEvent.setup();

        const addToBasket = jest.fn();
        const clearToBasket = jest.fn();

        render(<Card variety={MOCK_VARIETIES[0]} addToBasket={addToBasket} clearToBasket={clearToBasket} basket={MOCK_VARIETIES} />);

        const addBtn = screen.getByRole('button', { name: /ekle/i });
        const clearBtn = screen.getByRole('button', { name: /sıfırla/i });
        const cardValue = screen.getByTestId('cardValue');

        await user.click(addBtn);

        expect(addToBasket).toHaveBeenCalledWith(MOCK_VARIETIES[0]);
        expect(addToBasket).toHaveBeenCalledTimes(1);
        expect(cardValue).toHaveTextContent('1');

        await user.click(clearBtn);

        expect(clearToBasket).toHaveBeenCalledWith(MOCK_VARIETIES[0]);
        expect(clearToBasket).toHaveBeenCalledTimes(1);

    });

});