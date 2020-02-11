import React, { Component } from "react";
import { Link } from "react-router-dom";
import './proizvodi.scss'
import Card from '../card'
import {connect} from 'react-redux'
import { uzmiTip,sortirajTip, cenaTipDo, filteri } from "../../actions/tipAkcija";

const Proizvod = ({ match }) => <p>{match.params.id}</p>;

class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip:this.props.match.params.tip,
      filteri:[]
    };
    
  }
componentWillMount()
{
   this.props.uzmiTip(this.props.match.params.tip)
   localStorage.setItem("tip",this.props.match.params.tip)

}

componentWillUpdate(prevProps){
  localStorage.setItem("tip",prevProps.match.params.tip)
  if(this.props.match.params.tip!==prevProps.match.params.tip)
  {
    this.props.uzmiTip(prevProps.match.params.tip)
    localStorage.setItem("tip",prevProps.match.params.tip)
  }
  console.log(this.props.tip)
  }


  filter=(e)=>{
  var n = this.state.filteri;
  var n2=[]
  var postoji=0
  for(let i=0;i<n.length;i++)
  {
    if(n[i][0]===e.target.value[0])
    {
    console.log("posotji")
    var d= n[i]
    postoji=1;
      n2=n.filter(n=>n!=d)
      n2.push(e.target.value)
       this.setState({
    filteri:n2
  })
  this.props.filteri(n2,this.props.match.params.tip)
  console.log("PRONADJENO",n2)
    }
  }
  if(postoji===0)
  {
    n.push(e.target.value)
     this.setState({
    filteri:n
  })
  this.props.filteri(n,this.props.match.params.tip)
  console.log("NIJE PRONADJENO",n)
  }
  

  // this.setState({
  //   filteri:n
  // })
 
// this.props.sortirajTip(this.props.tip,this.state.filteri)
}

// cenaDo=(e)=>{
//   var n = this.state.filteri;
//   var n2=[]
//   var postoji=0
//   for(let i=0;i<n.length;i++)
//   {
//     if(n[i][0]===e.target.value[0])
//     {
//     console.log("posotji")
//     var d= n[i]
//     postoji=1;
//       n2=n.filter(n=>n!=d)
//       n2.push(e.target.value)
//        this.setState({
//     filteri:n2
//   })
//   this.props.filteri(n2,this.props.match.params.tip)
//   console.log("PRONADJENO",n2)
//     }
//   }
//   if(postoji===0)
//   {
//     n.push(e.target.value)
//      this.setState({
//     filteri:n
//   })
//   this.props.filteri(n,this.props.match.params.tip)
//   console.log("NIJE PRONADJENO",n)
//   }
  
  // this.props.cenaTipDo(e.target.value,this.props.match.params.tip)
  // this.setState({
  //   filteri:n
  // })
  // this.props.filteri(this.state.filteri,this.props.match.params.tip)
// }
  render() 
  {
    return (
      <div className="sve">
        <div className="kf">
        <form>
          <div className="filtriranje">
              <label htmlFor="sort">Sortiraj po </label>
                 <Link className="slct"><select id="sort" onChange={this.filter}>
                        <option value="Scrast" >Ceni rastuće</option>
                        <option value="Scopad" >Ceni opadajuće</option>
                        <option value="Snrast" >Nazivu A-Z</option>
                        <option value="Snopad" >Nazivu Z-A</option>
                    </select></Link>
                    </div>
                    <div className="filtriranje">
                     <label htmlFor="cenaDo">Cena do </label>
                 <Link className="slct"><select id="cenaDo" onChange={this.filter}>
                        <option value="Dsvi" >Svi proizvodi</option>
                        <option value="Ddo50" >&lt; 50 000</option>
                        <option value="Ddo100" >&lt; 100 000</option>
                        <option value="Ddo200" >&lt; 200 000</option>
                        <option value="Dpreko200" >&gt; 200 000</option>
                    </select></Link>
                    </div>
                </form>
                </div>
       <div>
       <div className="proiz">
       <div className="checkbox">
         <div className="inside">
           
            <label>Proizvodjac</label><br/>
           <input type="checkbox" name="Intel" id="Intel" value="Intel"/>
            <label htmlFor="Intel">Intel</label><br/>
            <input type="checkbox" name="AMD" id="AMD" value="AMD"/>
            <label htmlFor="AMD">AMD</label><br/><br/><hr/>
            </div>
            <div className="inside">
            <label>Tip procesora</label><br/>
           <input type="checkbox" name="Intel® Core™ i5 Processor" id="Intel® Core™ i5 Processor" value="Intel® Core™ i5 Processor"/>
            <label htmlFor="Intel® Core™ i5 Processor">Intel® Core™ i5</label><br/>
            <input type="checkbox" name="AMD Ryzen 7" id="AMD Ryzen 7" value="AMD Ryzen 7"/>
            <label htmlFor="AMD Ryzen 7">AMD Ryzen 7</label><br/>
            <input type="checkbox" name="Intel® Xeon® Processor" id="Intel® Xeon® Processor" value="Intel® Xeon® Processor"/>
            <label htmlFor="Intel® Xeon® Processor">Intel® Xeon®</label><br/>
            <input type="checkbox" name="Intel® Core™ i7 Processor" id="Intel® Core™ i7 Processor" value="Intel® Core™ i7 Processor"/>
            <label htmlFor="Intel® Core™ i7 Processor">Intel® Core™ i7</label><br/>
            <input type="checkbox" name="Intel® Core™ i3 Processor" id="Intel® Core™ i3 Processor" value="Intel® Core™ i3 Processor"/>
            <label htmlFor="Intel® Core™ i3 Processor">Intel® Core™ i3</label><br/>
            <input type="checkbox" name="Intel® Pentium® Processor" id="Intel® Pentium® Processor" value="Intel® Pentium® Processor"/>
            <label htmlFor="Intel® Pentium® Processor">Intel® Pentium®</label><br/><br/><hr/>
            </div>
            <div className="inside">
            <label>Memorija </label><br/>
            <input type="checkbox" name="4GB DDR4" id="4GB DDR4" value="4GB DDR4"/>
            <label htmlFor="4GB DDR4">4GB DDR4</label><br/>
            <input type="checkbox" name="8GB DDR4" id="8GB DDR4" value="8GB DDR4"/>
            <label htmlFor="8GB DDR4">8GB DDR4</label><br/>
            <input type="checkbox" name="16GB DDR4" id="16GB DDR4" value="16GB DDR4"/>
            <label htmlFor="16GB DDR4">16GB DDR4</label><br/>
            <input type="checkbox" name="4GB DDR3" id="4GB DDR3" value="4GB DDR3"/>
            <label htmlFor="4GB DDR3">4GB DDR3</label><br/>
            <input type="checkbox" name="8GB DDR3" id="8GB DDR3" value="8GB DDR3"/>
            <label htmlFor="8GB DDR3">8GB DDR3</label><br/><br/><hr/>
            </div>
            <div className="inside">
          <label>Graficka karta </label><br/>
            <input type="checkbox" name="GeForce GTX 1050" id="GeForce GTX 1050" value="GeForce GTX 1050"/>
            <label htmlFor="GeForce GTX 1050">GeForce GTX 1050</label><br/><br/><hr/>
            <input type="checkbox" name="GeForce GT 720" id="GeForce GT 720" value="GeForce GT 720"/>
            <label htmlFor="GeForce GT 720">GeForce GT 720</label><br/><br/><hr/>
            <input type="checkbox" name="Intel® UHD Graphics 630" id="Intel® UHD Graphics 630" value="Intel® UHD Graphics 630"/>
            <label htmlFor="Intel® UHD Graphics 630">Intel® UHD Graphics 630</label><br/><br/><hr/>
            <input type="checkbox" name="GeForce GTX 1060" id="GeForce GTX 1060" value="GeForce GTX 1060"/>
            <label htmlFor="GeForce GTX 1060">GeForce GTX 1060</label><br/><br/><hr/>
            </div>
            <div className="inside">
              <label>Namena</label><br/>
              <input type="checkbox" name="Multimedia" id="Multimedia" value="Multimedia"/>
            <label htmlFor="Multimedia">Multimedia</label><br/>
            <input type="checkbox" name="Gameplay" id="Gameplay" value="Gameplay"/>
            <label htmlFor="Gameplay">Gameplay</label><br/><br/><hr/>
            </div>
            <div className="inside">
            <label>Operativni sistem</label><br/>
            <input type="checkbox" name="Bez" id="Bez" value="Nema operativni sistem"/>
            <label htmlFor="Bez">Bez operativnog sistema</label><br/>
            <input type="checkbox" name="Windows" id="Windows" value="Windows"/>
            <label htmlFor="Windows">Windows 10</label><br/>
            <input type="checkbox" name="Free DOS 2.0" id="Free DOS 2.0"  value="Free DOS 2.0"/>
            <label htmlFor="Free DOS 2.0">Free DOS 2.0</label><br/><br/><hr/>
            </div>
            <div className="inside">
            <label>HDD/SSD</label><br/>
            <input type="checkbox" name="500GB HDD" id="500GB HDD" value="500GB HDD"/>
            <label htmlFor="500GB HDD">500GB HDD</label><br/>
            <input type="checkbox" name="1TB HDD" id="1TB HDD" value="1TB HDD"/>
            <label htmlFor="1TB HDD">1TB HDD</label><br/>
            <input type="checkbox" name="256GB SSD" id="256GB SSD" value="256GB SSD"/>
            <label htmlFor="256GB SSD">256GB SSD</label><br/>
            <input type="checkbox" name="512GB SSD" id="512GB SSD"  value="512GB SSD"/>
            <label htmlFor="512GB SSD">512GB SSD</label><br/><br/><hr/>
            </div>
           </div>
         <div className="proiz1">
           {
            this.props.tip.map(i=>(
               <div className="pored">
               <Card product={i}/>
               </div>
             ))
           }
           </div>
          
           </div>
         </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  tip:state.tip.tip
})

export default connect(mapStateToProps,{uzmiTip,sortirajTip, cenaTipDo, filteri})(Proizvodi);
