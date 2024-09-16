import Input from '../../utils/Input.jsx';

function Education({ content, setContent }) {
  const { school, degree, startDate, endDate, location } = content;
  const setValue = (valueObj) => {
    setContent({ ...content, ...valueObj });
  };

  return (
    <div className="card">
      <h3 className="card__title">Education</h3>
      <Input
        id="school"
        label="School"
        value={school}
        onChange={(e) => setValue({ school: e.target.value })}
      />
      <Input
        id="degree"
        label="Degree"
        value={degree}
        onChange={(e) => setValue({ degree: e.target.value })}
      />
      <Input
        id="start-date"
        label="Start Date"
        value={startDate}
        onChange={(e) => setValue({ startDate: e.target.value })}
      />
      <Input
        id="end-date"
        label="End Date"
        value={endDate}
        onChange={(e) => setValue({ endDate: e.target.value })}
      />
      <Input
        id="location"
        label="Location"
        value={location}
        onChange={(e) => setValue({ location: e.target.value })}
      />
    </div>
  );
}

export default Education;
