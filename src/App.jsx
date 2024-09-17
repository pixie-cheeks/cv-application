import { useState } from 'react';
import General from './components/General/General.jsx';
import Education from './components/Education/Education.jsx';
import Experience from './components/Experience/Experience.jsx';
import Resume from './components/Resume/Resume.jsx';

function App() {
  // Sec is for section
  const [generalSec, setGeneralSec] = useState({
    fullName: 'John Cena',
    email: 'john.cena@gmail.com',
    phone: '+1-202-688-5500',
    address: 'United States of America',
  });

  const [educationSec, setEducationSec] = useState({
    school: 'American University',
    degree: 'Bachelors in Computer Science',
    startDate: '09/2001',
    endDate: '11/2001',
    location: 'America',
  });
  const [experienceSec, setExperienceSec] = useState({
    companyName: 'Monkeys Inc.',
    positionTitle: 'Monkey Businessman',
    location: 'America',
    startDate: '09/2010',
    endDate: '11/2010',
    description:
      'Had the honor of working for an extremely American corporation.',
  });

  return (
    <>
      <div className="form">
        <General
          content={generalSec}
          setContent={(newGeneralSec) => setGeneralSec(newGeneralSec)}
        />
        <Education
          content={educationSec}
          setContent={(newEducationSec) => setEducationSec(newEducationSec)}
        />
        <Experience
          content={experienceSec}
          setContent={(newExperienceSec) => setExperienceSec(newExperienceSec)}
        />
      </div>
      <Resume {...{ generalSec, educationSec, experienceSec }} />
    </>
  );
}

export default App;
