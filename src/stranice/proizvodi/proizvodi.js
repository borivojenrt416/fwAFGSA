import React, { Component } from "react";
import { Link } from "react-router-dom";
import './proizvodi.scss'
import Side from "../komponente/side.js";
import { withRouter } from "react-router-dom";
import Card from '../card'
import {connect} from 'react-redux'
import { request } from "http";
import { uzmiTip } from "../../actions/tipAkcija";
import {sortirajTip} from "../../actions/sortirajTip"

const Proizvod = ({ match }) => <p>{match.params.id}</p>;

class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }

 
  // dodajUOmiljeno = e => {
  //   console.log(this.state.fav);
  //   var niz = [];

  //   niz = this.state.fav;

  //   var objekat = null;
  //   var br = 0;
  //   var indeks = 0;
  //   if(this.state.fav!==null){
  //   if (this.state.fav.length !== 0) {
  //     for (let i = 0; i < this.state.fav.length; i++) {
  //       if (this.state.fav[i].title === e.target.value) {
  //         br = 1;
  //       }
  //     }
  //   }
  // }
  // var objekat = null;
  // // this.setState({
  // //   fav:[]
  // // })
  // if (br === 0) {
  //   for (let k = 0; k < this.state.products.length; k++) {
  //     for (let i = 0; i < this.state.products[k].data.length; i++) {
  //       if (e.target.value === this.state.products[k].data[i].title) {
  //         objekat = this.state.products[k].data[i];
  //         console.log(this.state.products[k].data[i]);
  //       }
  //     }
  //   }
  // }

  // if(this.state.fav===null)
  // {
  //   var niz2= [objekat]
  //   this.setState({
  //     fav: niz2
  //    });
  //   localStorage.setItem("fav1", JSON.stringify(niz2));
  // }
  // else{
  //   var niz3 = []
  //   niz3 =this.state.fav
  //   niz3.push(objekat)
  //   const k = niz3.filter(n => n !== null);
  //   localStorage.setItem("fav1", JSON.stringify(k));
  //   console.log("session storage items", localStorage.getItem("fav1"));
  //   this.setState({
  //    fav: k
  //   });
  // }
  // console.log(localStorage.getItem("fav1"))
  
 

 
  // };

  // kupi = e => {
  //   console.log(this.state.kup);
  //   var niz = [];

  //   niz = this.state.kup;

  //   var objekat = null;
  //   var br = 0;
  //   var indeks = 0;
  //   if(this.state.kup!==null){
  //   if (this.state.kup.length !== 0) {
  //     for (let i = 0; i < this.state.kup.length; i++) {
  //       if (this.state.kup[i].title === e.target.value) {
  //         br = 1;
  //       }
  //     }
  //   }
   
  // }
  // var objekat = null;
  // // this.setState({
  // //   fav:[]
  // // })
  // var promena = 0
  // if (br === 0) {
  //   for (let k = 0; k < this.state.products.length; k++) {
  //     for (let i = 0; i < this.state.products[k].data.length; i++) {
  //       if (e.target.value === this.state.products[k].data[i].title) {
  //         objekat = this.state.products[k].data[i];
  //         console.log(this.state.products[k].data[i]);
  //         promena=1
  //       }
  //     }
  //   }
  // }

  // if(this.state.kup===null)
  // {
  //   var niz2= [objekat]
  //   this.setState({
  //     kup: niz2
  //    });
  //    localStorage.setItem("kupi", JSON.stringify(niz2));
  //    localStorage.setItem("brojProizvoda",JSON.stringify(niz2.length))
  // }
  // else{
  //   var niz3 = []
  //   niz3 =this.state.kup
  //   niz3.push(objekat)
  //   const k = niz3.filter(n => n !== null);
  //   localStorage.setItem("kupi", JSON.stringify(k));
  //   console.log("session storage items", localStorage.getItem("kupi"));
  //   this.setState({
  //    kup: k
  //   });
  //   localStorage.setItem("brojProizvoda",JSON.stringify(k.length))
  // }
  // console.log(localStorage.getItem("kupi"))
  // // if(this.state.kup!==null)
  // // {
  // // localStorage.setItem("brojProizvoda",JSON.stringify(this.state.kup.length))
  // // }
  // if(promena===1)
  // {
  //   this.props.azuriraj()
  // }
 
  // };

componentWillMount()
{
   this.props.uzmiTip(this.props.match.params.tip)
}


// napuni=()=>
// {
//   fetch(`http://localhost:4000/korisnici/${this.props.match.params.tip}`)
//     .then(response=>response.json())
//    .then(response=>{
//      this.setState({
//        izbor:response.data,
//        uredjeno:this.state.izbor.slice(0,5)
//      })
//    })
// }
// promeni=(e)=>{
//   console.log(e.target.value)
//   var niz = this.state.uredjeno;
//   for(let i=0;i<niz.length-1;i++)
//   {
//     var a = JSON.stringify(niz[i].cena).replace('.','')
//     var b = parseInt(JSON.parse(a))
//     for(let j=i+1;j<niz.length;j++)
//     {
//       var c = JSON.stringify(niz[j].cena).replace('.','')
//       var d = parseInt(JSON.parse(c))
//       if(e.target.value==="rast")
//       {
//           if(b>d)
//           {
//             var temp = niz[i]
//             niz[i]=niz[j]
//             niz[j]=temp
//           }
//       }
//       if(e.target.value==="opad")
//       {
//         if(b<d)
//         {
//           var temp = niz[i]
//           niz[i]=niz[j]
//           niz[j]=temp
//         }
//       }
//     }
//   }

//   this.setState({
//     izbor:niz
//   })
// }

componentWillUpdate(prevProps){
  if(this.props.match.params.tip!==prevProps.match.params.tip)
  {
    this.props.uzmiTip(prevProps.match.params.tip)
  }
  }

  render() 
  {
   
    return (
      <div className="sve">
        <form>
          <div className="kf">
                <label htmlFor="sort">Sortiraj po:</label>
                {/*U SELECT-U I NAD BUTTONIMA SAM SAMO ISPROBAVAO POZIV FUNKCIJE*/ }
                    <select id="sort" onChange={this.props.sortirajTip(this.props.tip,"rast")}>
                        <option value="rast" onClick={()=>this.props.sortirajTip(this.props.tip,"rast")}>Ceni rastuće</option>
                        <option value="opad" onClick={()=>this.props.sortirajTip(this.props.tip,"opad")}>Ceni opadajuće</option>
                    </select>
                    </div>
                    <div className="kf">
                    {/* <label htmlFor="items">Items:{this.state.uredjeno.length} Strana:</label>  */}
                    <button type="button" onClick={()=>this.props.sortirajTip(this.props.tip,"rast")}>&lt;</button>
                    <button type="button" onClick={()=>this.props.sortirajTip(this.props.tip,"opad")}>&gt;</button>
                    </div>
                    <div className="kf">
                    <label htmlFor="views">Views:</label> 
                    <select id="num">
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select> 
                    </div> 
                </form>
       <div>
           {
            this.props.tip.map(i=>(
               <div className="pored">
               <Card product={i}/>
               </div>
             ))
     
           }
         </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  tip:state.tip.tip
})

const mapDispatchToProps = (dispatch) =>({
  uzmiTip:(t)=>dispatch(uzmiTip(t)),
  sortirajTip:(nesto,vrsta)=>dispatch(sortirajTip(nesto,vrsta))
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Proizvodi));
