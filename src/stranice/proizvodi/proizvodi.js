import React, { Component } from "react";
import { Link } from "react-router-dom";
import './proizvodi.scss'
import Card from '../card'
import {connect} from 'react-redux'
import { uzmiTip} from "../../actions/tipAkcija";
import {filteriDesktopRacunara} from "../../actions/filteriDesktopRacunaraAkcija"
import {filteriMonitora} from "../../actions/filteriMonitori"
import {FilteriDesktopRacunari} from './filteri/filteriDesktopRacunari'
import {FilteriGornjiDekstopRacunari} from './filteri/filteriGornjiDesktopRacunari'
import {FilteriGornjiMonitori} from './filteri/filteriGornjiMonitori'
import {FilteriGornjiMaticnaPloca} from './filteri/filteriGornjiMaticnaPloca'
import {FilteriMonitori} from './filteri/filteriMonitori'
import {FilteriMaticnaPloca} from './filteri/filteriMaticnaPloca'
import { FilteriProcesor } from "./filteri/filteriProcesor";
import { FilteriGornjiProcesor } from "./filteri/filteriGornjiProcesor";
import { FilteriGornjiMemorija } from "./filteri/filteriGornjiMemorija";
import { FilteriMemorija } from "./filteri/filteriMemorija";
import { FilteriGrafickaKartica } from "./filteri/filteriGrafickaKartica";
import { FilteriGornjiGrafickaKartica } from "./filteri/filteriGornjiGrafickaKartica";
import { FilteriHDD } from "./filteri/filteriHDD";
import { FilteriGornjiHDD } from "./filteri/filteriGornjiHDD";
import { FilteriSSD } from "./filteri/filteriSSD";
import { FilteriGornjiSSD } from "./filteri/filteriGornjiSSD";
import { FilteriGornjiNapajanja } from "./filteri/filteriGornjiNapajanja";
import { FilteriNapajanja } from "./filteri/filteriNapajanja";
import { FilteriKucista } from "./filteri/filteriKucista";
import { FilteriGornjiKucista } from "./filteri/filteriGornjiKucista";
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
  console.log(this.props.match.params.tip)
   this.props.uzmiTip(this.props.match.params.tip)
   localStorage.setItem("tip",this.props.match.params.tip)
   console.log(this.props.match.params.tip)


}

componentWillUpdate(prevProps){
  localStorage.setItem("tip",prevProps.match.params.tip)
  if(this.props.match.params.tip!==prevProps.match.params.tip)
  {
    this.props.uzmiTip(prevProps.match.params.tip)
    localStorage.setItem("tip",prevProps.match.params.tip)
    let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');

  for(let i=0;i<checkedBoxes.length;i++)
  {
    console.log(checkedBoxes[i])
    document.getElementById(checkedBoxes[i].id).checked=false;
  }
  this.setState({
    filteri:[]
  })
  var niz=[]
  if(prevProps.match.params.tip==="Desktop")
  {
    this.props.filteriDesktopRacunara(niz,prevProps.match.params.tip)
  }
  else if(prevProps.match.params.tip==="Monitori")
  {
    this.props.filteriMonitora(niz,prevProps.match.params.tip)
  }
  document.getElementById("cenaDo").value="dsvi"
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
      console.log(n2)
       this.setState({
    filteri:n2
  })
  if(this.props.match.params.tip==="Desktop")
  {
    this.props.filteriDesktopRacunara(n2,this.props.match.params.tip)
  }
  else if(this.props.match.params.tip==="Monitori")
  {
    this.props.filteriMonitora(n2,this.props.match.params.tip)
  }
  console.log("PRONADJENO",n2)
    }
  }
  if(postoji===0)
  {
    n.push(e.target.value)
    console.log(n)
     this.setState({
    filteri:n
  })
  if(this.props.match.params.tip==="Desktop")
  {
    this.props.filteriDesktopRacunara(n,this.props.match.params.tip)
  }
  else if(this.props.match.params.tip==="Monitori")
  {
    this.props.filteriMonitora(n,this.props.match.params.tip)
  }
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
checkChanged=(e)=>{
  console.log(e.target.value)
  var niz = this.state.filteri;
  var nadjenCheck=false;
  for(let i=0;i<niz.length;i++)
  {
    console.log(e.target.value)
    if(niz[i]===e.target.value)
    nadjenCheck=true;
  }

  if(nadjenCheck)
  {
    console.log("Nadjen",e.target.value)
    var niz2=niz.filter(n=>n!=e.target.value)
    console.log(niz2)
    this.setState({
      filteri:niz2
    })
    if(this.props.match.params.tip==="Desktop")
    {
      console.log("Desktop parametar")
      this.props.filteriDesktopRacunara(niz2,this.props.match.params.tip)
    }
    else if(this.props.match.params.tip==="Monitori")
    {
      console.log("Monitor parametar")
      this.props.filteriMonitora(niz2,this.props.match.params.tip)
    }
  }
  if(!nadjenCheck)
  {
    console.log("Nije nadjen",e.target.value)
    niz.push(e.target.value)
    this.setState({
      filteri:niz
    })
    if(this.props.match.params.tip==="Desktop")
  {
    console.log("Nije nadjen Desktop parametar")
    this.props.filteriDesktopRacunara(niz,this.props.match.params.tip)
  }
  else if(this.props.match.params.tip==="Monitori")
  {
    console.log("Nije nadjen Monitor parametar")
    this.props.filteriMonitora(niz,this.props.match.params.tip)
  }
  }

}
clear=(e)=>{
  e.preventDefault();
  // var checkBoxes = this.state.filteri;
  // for(let i=0;i<checkBoxes.length;i++)
  // {
  //   document.getElementById(checkBoxes[i])
  // }
  let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');

  for(let i=0;i<checkedBoxes.length;i++)
  {
    console.log(checkedBoxes[i])
    document.getElementById(checkedBoxes[i].id).checked=false;
  }
  this.setState({
    filteri:[]
  })
  var niz=[]
  if(this.props.match.params.tip==="Desktop")
  {
    this.props.filteriDesktopRacunara(niz,this.props.match.params.tip)
  }
  else if(this.props.match.params.tip==="Monitori")
  {
    this.props.filteriMonitora(niz,this.props.match.params.tip)
  }
  document.getElementById("cenaDo").value="dsvi"
}
  render() 
  
  {
    console.log(this.props.tip)
    return (
      <div className="sve">
        
       <div>
       <div className="proiz">
       <div className="checkbox">{
       this.props.match.params.tip==="Desktop"?<FilteriDesktopRacunari checkChanged={this.checkChanged}/>:""
       }
         {
       this.props.match.params.tip==="Monitori"?<FilteriMonitori checkChanged={this.checkChanged}/>:""
       }
             {
       this.props.match.params.tip==="MaticnePloce"?<FilteriMaticnaPloca checkChanged={this.checkChanged}/>:""
       }
         {
       this.props.match.params.tip==="Procesori"?<FilteriProcesor checkChanged={this.checkChanged}/>:""
       }
       {
       this.props.match.params.tip==="Memorije"?<FilteriMemorija checkChanged={this.checkChanged}/>:""
       }
              {
       this.props.match.params.tip==="GrafickeKarte"?<FilteriGrafickaKartica checkChanged={this.checkChanged}/>:""
       }
                     {
       this.props.match.params.tip==="HDD"?<FilteriHDD checkChanged={this.checkChanged}/>:""
       }
         {
       this.props.match.params.tip==="SSD"?<FilteriSSD checkChanged={this.checkChanged}/>:""
       }
         {
       this.props.match.params.tip==="Napajanja"?<FilteriNapajanja checkChanged={this.checkChanged}/>:""
       }
         {
       this.props.match.params.tip==="Kucista"?<FilteriKucista checkChanged={this.checkChanged}/>:""
       }
         </div>
         <div className="proiz1">
                      {
                      this.props.match.params.tip==="Desktop"?(<FilteriGornjiDekstopRacunari clear={this.clear} filter={this.filter}/> 
                      ):""
                    }
                     {
                      this.props.match.params.tip==="Monitori"?(<FilteriGornjiMonitori clear={this.clear} filter={this.filter}/> ):""
                    }
                   {
                      this.props.match.params.tip==="MaticnePloce"?(<FilteriGornjiMaticnaPloca clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="Procesori"?(<FilteriGornjiProcesor clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="Memorije"?(<FilteriGornjiMemorija clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="GrafickeKarte"?(<FilteriGornjiGrafickaKartica clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="HDD"?(<FilteriGornjiHDD clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="SSD"?(<FilteriGornjiSSD clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="Napajanja"?(<FilteriGornjiNapajanja clear={this.clear} filter={this.filter}/> ):""
                    }
                       {
                      this.props.match.params.tip==="Kucista"?(<FilteriGornjiKucista clear={this.clear} filter={this.filter}/> ):""
                    }
                <div className="cards">           
                {
            this.props.tip.map(i=>(
               <div className="pored" key={i.Naziv}>
               <Card product={i} key={i.Naziv}/>
               </div>
             ))
           }
           </div>

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

export default connect(mapStateToProps,{uzmiTip,filteriDesktopRacunara,filteriMonitora})(Proizvodi);
