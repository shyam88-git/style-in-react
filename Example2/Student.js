class Student extends React.Component{

  

  render(){
    
    const studentStyle={

      backgroundColor:'bisqu',
      borderRadius:'20px',
      border:"solid 2px brown",



  };

    return(

      <div style={studentStyle}>

        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Gender:{this.props.gender.map((gen)=>{

          return(
                <div>
                  <input type="radio" name="gender" value={gen}/>{gen}
                </div>
          )
        })}</p>
      
       <p>Address:{this.props.address}</p>

      </div>
    )
  }
}