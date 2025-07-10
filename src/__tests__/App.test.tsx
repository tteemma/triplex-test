import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { withOnClickDelay } from '../hoc/WithOnClickDelay'

const TestButton: React.FC<{ onClick?: () => void; disabled?: boolean }> = ({
	onClick,
	disabled,
}) => (
	<button onClick={onClick} disabled={disabled}>
		Test Button
	</button>
)

describe('withOnClickDelay', () => {
	test('should call onClick handler', () => {
		const handleClick = jest.fn()
		const ButtonWithDelay = withOnClickDelay(TestButton, { delay: 100 })

		render(<ButtonWithDelay onClick={handleClick} />)

		fireEvent.click(screen.getByText('Test Button'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	test('should disable button after click', () => {
		const ButtonWithDelay = withOnClickDelay(TestButton, { delay: 100 })

		render(<ButtonWithDelay onClick={() => {}} />)

		const button = screen.getByText('Test Button')
		fireEvent.click(button)

		expect(button).toBeDisabled()
	})

	test('should enable button after delay', async () => {
		const ButtonWithDelay = withOnClickDelay(TestButton, { delay: 100 })

		render(<ButtonWithDelay onClick={() => {}} />)

		const button = screen.getByText('Test Button')
		fireEvent.click(button)

		expect(button).toBeDisabled()

		await waitFor(
			() => {
				expect(button).not.toBeDisabled()
			},
			{ timeout: 200 }
		)
	})
})
