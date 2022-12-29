import {Link} from 'react-scroll'

function NavigationBar() {

    return (
        <div className='forward navigationBar noCursor'>
            <div className='personalBar'>
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                    <li className='navButton'><Link  to="about" spy={true} smooth={true}>About Me</Link></li>
                    <li className='navButton'><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                    <li className='navButton'><Link  to="contacts" spy={true} smooth={true}>Contacts</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;