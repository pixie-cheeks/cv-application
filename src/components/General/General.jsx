import Input from '../../utils/Input.jsx';

function General({ content, setContent }) {
  const { fullName, email, phone, address } = content;
  const setValue = (valueObj) => {
    setContent({ ...content, ...valueObj });
  };

  return (
    <div className="card">
      <h3 className="card__title">General Info</h3>
      <Input
        label="Full Name"
        id="full-name"
        value={fullName}
        onChange={(e) => setValue({ fullName: e.target.value })}
      />
      <Input
        label="Email"
        id="email"
        value={email}
        onChange={(e) => setValue({ email: e.target.value })}
      />
      <Input
        label="Phone Number"
        id="phone-number"
        value={phone}
        onChange={(e) => setValue({ phone: e.target.value })}
      />
      <Input
        label="address"
        id="address"
        value={address}
        onChange={(e) => setValue({ address: e.target.value })}
      />
    </div>
  );
}

export default General;
