import './App.css';
import top from './assets/main-menu/top-border.png';
import fun from './assets/main-menu/menu-option-fun-mode.png';
import resume from './assets/main-menu/menu-option-resume.png';
import projects from './assets/main-menu/menu-option-projects.png';
import about from './assets/main-menu/menu-option-about-me.png';
import contact from './assets/main-menu/menu-option-contact-me.png';
import bottom from './assets/main-menu/bottom-border.png';
import selector from './assets/main-menu/menu-selector.png';
import winky from './assets/main-menu/winky-pikachu.gif';
import gameboy from './assets/gameboy.png';

function App() {
	return (
		<>
			<div className='main-grid'>
				<img src={gameboy} className='top-display-border non-selectable-image' />
				<div className='top-display-border'>
					<div className='top-display-grid'>
						<div className='top-display'>
							{/* Display Menu */}
							<img src={top} width='100%' className='non-selectable-image' />
							<div className={'selectable'}>
								<div className={'hover-trigger'}>
									<img src={winky} className={'winky non-selectable-image'} />
									<img src={fun} className={'fun-label non-selectable-image'} />
								</div>
								<img src={selector} className={'fun-selector non-selectable-image'} />
							</div>
							<div className={'selectable'}>
								<img src={resume} className={'resume-label non-selectable-image'} />
								<img src={selector} className={'resume-selector non-selectable-image'} />
							</div>
							<div className={'selectable'}>
								<img src={projects} className={'projects-label non-selectable-image'} />
								<img src={selector} className={'projects-selector non-selectable-image'} />
							</div>
							<div className={'selectable'}>
								<img src={about} className={'about-label non-selectable-image'} />
								<img src={selector} className={'about-selector non-selectable-image'} />
							</div>
							<div className={'selectable'}>
								<img src={contact} className='contact-label non-selectable-image' />
								<img src={selector} className={'contact-selector non-selectable-image'} />
							</div>
							<img src={bottom} width='100%' className='non-selectable-image' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
