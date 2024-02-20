
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

import { Routes, Route } from 'react-router-dom'

function Content() {
    return (
    

        <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={< Resume />} />
            
        </Routes>
        
    )

}
export default Content;