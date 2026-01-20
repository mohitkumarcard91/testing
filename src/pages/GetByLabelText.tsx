export default function GetByLabelText() {
  return (
    <div>
      <label htmlFor="user-name">Username</label>
      <input id="user-name" type="text" />

      <div aria-label="Name" id="name">Mohit</div>
    </div>
  );
}