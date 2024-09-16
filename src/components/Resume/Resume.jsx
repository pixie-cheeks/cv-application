function Education({ fullName, email, phone, address }) {
  return '';
}

function Resume({ generalSec, educationSec, experienceSec }) {
  const { fullName, email, phone, address } = generalSec;

  return (
    <div className="resume">
      <div className="resume__head">
        <h1 className="resume__full-name">{fullName}</h1>
        <div className="resume__contact-info">
          <div className="resume__email">{email}</div>
          <div className="resume__phone">{phone}</div>
          <div className="resume__address">{address}</div>
        </div>
      </div>

      <div className="resume__body">
        <section className="education">
          <h2 className="education__header">Education</h2>
          <div className="education__side">
            <div className="education__date">
              {educationSec.startDate} - {educationSec.endDate}
            </div>
            <div className="experience__location">{educationSec.location}</div>
          </div>
          <div className="education__main">
            <h3 className="education__school">{educationSec.school}</h3>
            <div className="education__degree">{educationSec.degree}</div>
          </div>
        </section>

        <section className="experience">
          <h2 className="experience__header">Experience</h2>
          <div className="experience__side">
            <div className="experience__date">
              {experienceSec.startDate} - {experienceSec.endDate}
            </div>
            <div className="experience__location">{experienceSec.location}</div>
          </div>
          <div className="experience__main">
            <h3 className="experience__company">{experienceSec.companyName}</h3>
            <div className="experience__position">
              {experienceSec.positionTitle}
            </div>
            <div className="experience__description">
              {experienceSec.description}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
