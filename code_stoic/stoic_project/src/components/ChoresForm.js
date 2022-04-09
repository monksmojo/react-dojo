import { useState } from "react";
function ChoresForm(props) {
  const [choresTitle, setChoresTitle] = useState('');
  const [choresDesc, setChoresDesc] = useState('');
  const [choresAssignTo, setChoresAssignTo] = useState('');
  const formSubmitHandler = (event) => {
    event.preventDefault();
    let newChores = {
      choreName: choresTitle,
      choresDescription: choresDesc,
      choresAssignee: choresAssignTo,
    };
    console.log(newChores);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label>chore title</label>
      <input
        type="text"
        value={choresTitle}
        onChange={(e) => setChoresTitle(e.target.value)}
      />
      <label>chore description</label>
      <input
        type="text"
        value={choresDesc}
        onChange={(e) => setChoresDesc(e.target.value)}
      />
      <label>chore assignTo</label>
      <input
        type="text"
        value={choresAssignTo}
        onChange={(e) => setChoresAssignTo(e.target.value)}
      />
      <input type="submit" value="add chores" />
    </form>
  );
}

export default ChoresForm;
