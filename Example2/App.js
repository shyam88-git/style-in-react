class App extends React.Component {
  render() {
    return (
      <Student
        name="Varun"
        age={29}
        gender={["male" ,"female","other"]}
        address="Kathmandu" 
             />
    );
  }
}
let div=document.querySelector('#root');
let root=ReactDOM.createRoot(div);
root.render(<App/>,div);