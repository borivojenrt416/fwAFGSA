import React,{Component} from 'react'

class Omiljeno extends Component{
constructor(props){
    super(props);

    this.state={
        niz:[]
    }
}



popuni
    render(){
        console.log(this.state.niz);
        return(
            <div>
                <h1>Vasi omiljeni proizvodi</h1>
                  {this.state.niz.map(n=>
                  (
                      <h2>{n}</h2>
                  ))}
            </div>
        );
    }
}

export default Omiljeno;