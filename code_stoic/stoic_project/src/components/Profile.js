function Profile(props) {
    function alertNameExecutor(){
        props.alertName(props.name)
    }
  return (    
    <>
      <h1>{props.name}</h1>
      <button onClick={()=>props.alertName(props.name)}> Show Me In Alert </button>
    </>
  );
}

export default Profile
