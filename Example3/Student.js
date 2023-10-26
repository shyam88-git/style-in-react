class Student extends React.Component{

  

  render(){
    
    

    return(

      <div style={{ backgroundColor:'bisqu',
      borderRadius:'20px',
      border:"solid 2px brown",}}>
        <h2>Student Details</h2>

        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Gender:{this.props.gender.map((gen)=>{

          return(
                <div>
                  <input type="radio" name="gender" value={gen}/>{gen}
                </div>
          )
        })}</p>
      
       <p>Address:<strong>{this.props.address}</strong></p>

      </div>
    )
  }
}