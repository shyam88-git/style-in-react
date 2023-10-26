class Student extends React.Component {
  render() {
    let total=10;
    const { subjects ,marks} = this.props;

    return (
      <div  className="Student">
        <h2>Student Details</h2>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>

         <div>Subject:<ul>
            { subjects.map((subj,index)=>{

                return(<li key={index}>{subj}</li>)
            })}
            
            </ul></div>

            <div>Marks: <ul>
                {marks.map((mark,index)=>{

                    return(<li key={index}>{mark}</li>)
                })}</ul></div>

            
            <p>Total:{
                
                  total=  marks.reduce((acc,ele)=>acc+=ele)}</p>

            <p>Result:{total>120?"pass":"fail"}</p>
            
      </div>

    
    );
  }
}
