import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './routes/About';
import Accessibility from './routes/Accessibility';
import BoardMembers from './routes/BoardMembers';
import Contact from './routes/Contact';
import Donate from './routes/Donate';
import Events from './routes/Events';
import HolidayDeliveries from './routes/HolidayDeliveries';
import Home from './routes/Home';
import Privacy from './routes/Privacy';
import Volunteer from './routes/Volunteer';
import WrappingParty from'./routes/WrappingParty';


const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path ="accessibility" element={<Accessibility />} />
                <Route path="boardmembers" element={<BoardMembers />} />
                <Route path="contact" element={<Contact />} />
                <Route path ="donate" element={<Donate />} />
                <Route path="events" element={<Events />} />
                <Route path="holidaydeliveries" element={<HolidayDeliveries />} />
                <Route path="privacypolicy" element={<Privacy />} />
                <Route path="volunteer" element={<Volunteer/>} />
                <Route path="wrappingparty" element={<WrappingParty/>} /> 
            </Route>           
        </Routes>

        </>
    );
};

export default App;