function Input({
  onChange,
  label,
  value,
  id,
  type = 'text',
  textarea = false,
}) {
  const className = 'card__input';
  const input = textarea ? (
    <textarea name={id} {...{ id, className, onChange }}>
      {value}
    </textarea>
  ) : (
    <input {...{ type, value, id, className, onChange }} />
  );

  return (
    <div className="field card__field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      {input}
    </div>
  );
}

export default Input;
