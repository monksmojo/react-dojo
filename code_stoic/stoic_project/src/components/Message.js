function Message(){
    const pi = 3.14
    const myMessage=()=>"pls help !!!"
    return (
      <div>
        <h1>the total is {10 + 30}</h1>
        <h1>{pi}</h1>
        <h1>the Message is {myMessage()}</h1>
      </div>
    );
}

export default Message;