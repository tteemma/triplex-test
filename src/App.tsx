import React from 'react'
import { Button } from '@sberbusiness/triplex/components/Button/Button'
import {
	EButtonSize,
	EButtonTheme,
} from '@sberbusiness/triplex/components/Button/enums'
import './App.css'
import { withOnClickDelay } from './hoc/WithOnClickDelay'

const DelayedButton = withOnClickDelay(Button)

export const App: React.FC = () => {
	const handleClick = () => {
		console.log('Hello world')
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Тестовое задание для Сбербанка</h1>
				<p>HOC WithOnClickDelay</p>

				<article style={{ margin: '20px 0' }}>
					<DelayedButton
						onClick={handleClick}
						size={EButtonSize.MD}
						theme={EButtonTheme.GENERAL}
					>
						Click me (10s delay)
					</DelayedButton>
				</article>

				<article style={{ margin: '20px 0' }}>
					<DelayedButton
						onClick={() => console.log('Secondary button clicked')}
						size={EButtonSize.SM}
						theme={EButtonTheme.SECONDARY}
					>
						Secondary Button (10s delay)
					</DelayedButton>
				</article>

				<p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '14px' }}>
					После клика на любую кнопку она становится неактивной на 10 секунд.
					Это демонстрирует работу HOC <code>withOnClickDelay</code>.
				</p>
			</header>
		</div>
	)
}
