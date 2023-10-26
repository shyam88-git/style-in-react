class App extends React.Component {
  render() {
    return (
      <Student
        name="Varun"
        age={29}
        subjects={["Phy", "Chem", "Maths"]}
        marks={[40, 45, 60]}
      />
    );
  }
}
let div=document.querySelector('#root');
let root=ReactDOM.createRoot(div);
root.render(<App/>,div);