import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {About} from './Routing/About';
import { Home } from './Routing/Home';
import { Contact } from './Routing/Contact';

export function App(){
    return <div>
        <BrowserRouter>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link>
        <br/>
        <Routes>
            {/* this is the main page  */}
            <Route path='/' element={<Home />}></Route>

            <Route path='/about' element={<About />}></Route>


            <Route path='/contact' element={<Contact />}></Route>

        </Routes>
        </BrowserRouter>
    </div>
}