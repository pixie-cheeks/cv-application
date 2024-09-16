import Input from '../../utils/Input.jsx';

function Experience({ content, setContent }) {
  const {
    companyName,
    positionTitle,
    startDate,
    endDate,
    location,
    description,
  } = content;

  const setValue = (valueObj) => {
    setContent({ ...content, ...valueObj });
  };

  return (
    <div className="card">
      <h3 className="card__title">Experience</h3>
      <Input
        id="company-name"
        label="Company Name"
        value={companyName}
        onChange={(e) => setValue({ companyName: e.target.value })}
      />
      <Input
        id="postion-title"
        label="Position Title"
        value={positionTitle}
        onChange={(e) => setValue({ positionTitle: e.target.value })}
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
      <Input
        id="description"
        label="Description"
        value={description}
        onChange={(e) => setValue({ description: e.target.value })}
        textarea
      />
    </div>
  );
}

export default Experience;
