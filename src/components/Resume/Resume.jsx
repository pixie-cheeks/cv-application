import './Resume.css';

function GeneralInfo({ content }) {
  const { fullName, email, phone, address } = content;
  return (
    <div className="resume__head">
      <h1 className="resume__full-name">{fullName}</h1>
      <div className="resume__contact-info">
        <div className="resume__email">{email}</div>
        <div className="resume__phone">{phone}</div>
        <div className="resume__address">{address}</div>
      </div>
    </div>
  );
}

function Education({ content }) {
  const { startDate, endDate, location, school, degree } = content;
  return (
    <div className="education__item">
      <div className="education__side">
        <div className="education__date">
          {startDate} - {endDate}
        </div>
        <div className="experience__location">{location}</div>
      </div>
      <div className="education__main">
        <h3 className="education__school">{school}</h3>
        <div className="education__degree">{degree}</div>
      </div>
    </div>
  );
}

function Experience({ content }) {
  const {
    startDate,
    endDate,
    location,
    companyName,
    positionTitle,
    description,
  } = content;

  return (
    <div className="experience__item">
      <div className="experience__side">
        <div className="experience__date">
          {startDate} - {endDate}
        </div>
        <div className="experience__location">{location}</div>
      </div>
      <div className="experience__main">
        <h3 className="experience__company">{companyName}</h3>
        <div className="experience__position">{positionTitle}</div>
        <div className="experience__description">{description}</div>
      </div>
    </div>
  );
}

function Resume({ generalSec, educationSec, experienceSec }) {
  return (
    <div className="resume">
      <GeneralInfo content={generalSec} />

      <div className="resume__body">
        <section className="education">
          <h2 className="education__header">Education</h2>
          <Education content={educationSec} />
        </section>

        <section className="experience">
          <h2 className="experience__header">Experience</h2>
          <Experience content={experienceSec} />
        </section>
      </div>
    </div>
  );
}

export default Resume;
