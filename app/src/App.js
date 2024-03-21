import './App.css';
import top from './main-menu/top-border.png';
import fun from './main-menu/menu-option-fun-mode.png';
import resume from './main-menu/menu-option-resume.png';
import projects from './main-menu/menu-option-projects.png';
import about from './main-menu/menu-option-about-me.png';
import contact from './main-menu/menu-option-contact-me.png';
import bottom from './main-menu/bottom-border.png';
import selector from './main-menu/menu-selector.png';

function App() {
  return (
    <div class={"menu"} >
        <div className={"menu-item"}>
            <img src={top} width="100%" />
        </div>
        <div className={"menu-item"}>
            <div className={"selectable"} >
                <img src={fun} className={"fun-label"} />
                <img src={selector} className={"fun-selector"} />
            </div>
        </div>
        <div className={"menu-item"}>
            <div className={"selectable"} >
                <img src={resume} className={"resume-label"} />
                <img src={selector} className={"resume-selector"} />
            </div>
        </div>
        <div className={"menu-item"}>
            <div className={"selectable"} >
                <img src={projects} className={"projects-label"} />
                <img src={selector} className={"projects-selector"} />
            </div>
        </div>
        <div className={"menu-item"}>
            <div className={"selectable"} >
                <img src={about} className={"about-label"} />
                <img src={selector} className={"about-selector"} />
            </div>
        </div>
        <div className={"menu-item"}>
            <div className={"selectable"} >
                <img src={contact} className="contact-label" />
                <img src={selector} className={"contact-selector"} />
            </div>
        </div>
        <div className={"menu-item"}>
            <img src={bottom} width="100%" />
        </div>
    </div>
  );
}

export default App;
