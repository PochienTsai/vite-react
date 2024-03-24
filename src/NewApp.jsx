//箭頭
//function
function NewApp() {
  const num = 300;
  return (
    <div>
      <h1>Hi, I am a React Component {num*2}</h1>
      <div style={{color:'red',backgroundColor:'greenYellow' }}>鳥好</div>
      <input type="text" disabled={true} />
    </div>
  );
}
export default NewApp