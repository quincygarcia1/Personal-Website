import {Link} from 'react-scroll'

function NavigationBar() {

    return (
        <div className='forward navigationBar noCursor'>
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                <li className='navButton'><Link  to="about" spy={true} smooth={true}>About</Link></li>
                <li className='navButton'><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                <li className='navButton'><Link  to="contacts" spy={true} smooth={true}>Contacts</Link></li>
            </ul>
            
        </div>
    );
};

export default NavigationBar;