import React, { useCallback, useState } from 'react'

interface WithOnClickDelayProp {
	delay?: number
}

export const withOnClickDelay = <T extends object>(
	Component: React.ComponentType<T>,
	options: WithOnClickDelayProp = {}
) => {
	const { delay = 10000 } = options

	return (props: T & { onClick?: () => void }) => {
		const [isDisable, setIsDisable] = useState<boolean>(false)

		const onButtonClick = useCallback(() => {
			if (isDisable) return

			props.onClick?.()

			setIsDisable(true)

			setTimeout(() => {
				setIsDisable(false)
			}, delay)
		}, [isDisable, props.onClick, delay])

		return <Component {...props} onClick={onButtonClick} disabled={isDisable} />
	}
}
