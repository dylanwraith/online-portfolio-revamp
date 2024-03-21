import logo from './logo.svg';
import './App.css';
import top from './main-menu/top-border.png';
import fun from './main-menu/menu-option-fun-mode.png';
import resume from './main-menu/menu-option-resume.png';
import projects from './main-menu/menu-option-projects.png';
import about from './main-menu/menu-option-about-me.png';
import contact from './main-menu/menu-option-contact-me.png';
import bottom from './main-menu/bottom-border.png';

function App() {
  return (
    <div class={"container"} >
        <div className={"menu-item"}>
            <img src={top} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={fun} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={resume} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={projects} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={about} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={contact} alt="fun-mode" width="100%" />
        </div>
        <div className={"menu-item"}>
            <img src={bottom} alt="fun-mode" width="100%" />
        </div>
    </div>
  );
}

export default App;
