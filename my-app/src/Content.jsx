import './Content.css';

import logo from './images/logo.png';
import menunav from './images/menu.png';
import declarative from './images/icon1.png'; 
import components from './images/icon2.png'; 
import singleWay from './images/icon3.png'; 
import jsx from './images/icon4.png'; 




function Content(){

    return (
        <div>
            <nav className='navBar'>
                <img src={logo}  alt="Logo"/>
                <img src={menunav} className='navMenu' alt="Menu"/>
            </nav>
            <section className='section'>
                <h1 className="header">Say hello to</h1>
                <h1 className="header">ReactJS</h1>
                <p>You will learn how to use</p>
                <p>the most popular frontend library,</p>
                <p>and become a super Ninja developer</p>

                <h5>Awesome!</h5>
            </section>
            <footer className='footer'>
                <div>
                    <img src={declarative} alt="Declarative"/>
                    <h2>Declarative</h2>
                    <p>React makes it</p>
                    <p>painless to create </p>
                    <p>interactive UIs.</p>
                </div>
                <div>
                    <img src={components} alt="Components"/>
                    <h2>Components</h2>
                    <p>Build encapsulated</p>
                    <p>components that </p>
                    <p>imanage their state.</p>
                </div>
                <div>
                    <img src={singleWay} alt="SingleWay"/>
                    <h2>Single-Way</h2>
                    <p>A set of immutable</p>
                    <p>values are passed to </p>
                    <p>the component´s.</p>
                </div>
                <div>
                    <img src={jsx} alt="JSX"/>
                    <h2>JSX</h2>
                    <p>Statically-typed,</p>
                    <p>designed to run on</p>
                    <p>modern browsers.</p>
                </div>        
            </footer>
        </div>
    )
}








export default Content;