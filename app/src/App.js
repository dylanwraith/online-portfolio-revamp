import './App.css';
import React, { useState, useEffect } from 'react';
import selector from './assets/main-menu/menu-selector.svg';
import winky from './assets/main-menu/winky-pikachu.gif';
import gameboy from './assets/gameboy.png';
import menuBorder from './assets/main-menu/menu-border.svg';

function App() {
	const [selected, setSelected] = useState([true, false, false, false, false]);

	function MainMenuButton({ index, label, select }) {
		const [isSelected, setIsSelected] = useState(selected[index] || false);
		const selectButton = () => {
			select();
			setIsSelected(selected[index]);
		};

		return (
			<li className='main-menu-button-wrapper' onMouseEnter={selectButton}>
				<button className='main-menu-button'>
					{label}
					{label === 'FUN MODE' && <img src={winky} className={'winky non-selectable-image'} />}
				</button>
				{isSelected && <img src={selector} className='selector' />}
			</li>
		);
	}

	const setFunModeSelected = () => {
		setSelected([true, false, false, false, false]);
	};

	const setResumeSelected = () => {
		setSelected([false, true, false, false, false]);
	};

	const setProjectsSelected = () => {
		setSelected([false, false, true, false, false]);
	};

	const setAboutMeSelected = () => {
		setSelected([false, false, false, true, false]);
	};

	const setContactMeSelected = () => {
		setSelected([false, false, false, false, true]);
	};

	return (
		<>
			<div className='main-grid'>
				<img src={gameboy} className='top-display-border non-selectable-image' />
				<div className='top-display-border'>
					<div className='top-display-grid'>
						<div className='top-display'>
							{/* Display Menu */}
							<img src={menuBorder} className='menu-border non-selectable-image' />
							<menu className='menu-grid'>
								<MainMenuButton label='FUN MODE' index='0' select={() => setFunModeSelected()} />
								<MainMenuButton label='RESUME' index='1' select={() => setResumeSelected()} />
								<MainMenuButton label='PROJECTS' index='2' select={() => setProjectsSelected()} />
								<MainMenuButton label='ABOUT ME' index='3' select={() => setAboutMeSelected()} />
								<MainMenuButton label='CONTACT' index='4' select={() => setContactMeSelected()} />
							</menu>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
