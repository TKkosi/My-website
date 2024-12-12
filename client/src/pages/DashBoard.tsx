import { Route, Routes } from 'react-router-dom';
import About from './dashboardpages/About';
import Home from './dashboardpages/Home';
import Contact from './dashboardpages/Contact';
import Projects from './dashboardpages/Projects';
import NavBar from '../components/NavBar';

const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    )
}

export default DashBoard