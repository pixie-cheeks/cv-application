import Input from '../../utils/Input.jsx';

function Education({ content, setContent }) {
  const { school, degree, startDate, endDate, location } = content;
  return (
    <div className="card">
      <h3 className="card__title">Education</h3>
      <Input id="school" label="School" value={school} />
      <Input id="degree" label="Degree" value={degree} />
      <Input id="start-date" label="Start Date" value={startDate} />
      <Input id="end-date" label="End Date" value={endDate} />
      <Input id="location" label="Location" value={location} />
    </div>
  );
}

export default Education;
