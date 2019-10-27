import React, { Component } from "react";
import "./side.css";
import Kartica from "./kartica";
import Gde from "./gde";
var niz = [];

class Side extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pros: [],
      ischk: false,
      rdb: "",
      act: "",
      filt: []
    };
  }

  show = e => {
    var check = e.target.checked;
    var value = e.target.value;
    var obj = null;
    if (check) {
      for (let i = 0; i < this.props.products.length; i++) {
        if (value == this.props.products[i].name) {
          obj = this.props.products[i];
        }
      }
      var niz = [];
      niz.push(obj);
      this.setState({
        pros: [...this.state.pros, niz]
      });
    } else {
      var filtered = this.state.pros.filter(pro => pro[0].name !== value);
      console.log(filtered);
      this.setState({ pros: filtered });
    }

    this.setState({
      act: "active"
    });
  };

  // changeRDB = e => {
  //   console.log(this.state.pros);
  //   let val = parseInt(e.target.value);
  //   console.log(val);
  //   var noviNiz = [];
  //   this.setState({
  //     rdb: e.target.value
  //   });
  //   var proizvodi = this.state.pros;

  //   console.log(proizvodi);
  //   // console.log(proizvodi.length)
  //   for (let i = 0; i < proizvodi.length; i++) {
  //     console.log(proizvodi[i].length);
  //     for (let j = 0; j < proizvodi[i].length; j++) {
  //       for (let k = 0; k < proizvodi[i][j].data.length; k++) {
  //         console.log(proizvodi[i][j].data[k]);
  //         var c = JSON.stringify(proizvodi[i][j].data[k].cena);
  //         var a = c.replace(".", "");
  //         var z = JSON.parse(a);
  //         console.log(z);
  //         if (parseInt(z) < val)
  //           noviNiz.push(
  //             this.state.pros.map(pro =>
  //               pro.filter(pr => pr.data === proizvodi[i][j].data[k])
  //             )
  //           );
  //       }
  //     }
  //   }
    // noviNiz = this.state.pros.filter(pro=>pro.filter(pr=>pr.data.filter(d=>parseInt(d.cena)>val)))
    // noviNiz=this.state.pros.map(pro=>pro.map(pr=>pr.data.filter(d=>parseInt(JSON.parse(JSON.stringify(d.cena)).replace('.',''))<val)))
  //   // noviNiz.push(this.state.pros.map(pro=>pro.map(pr=>pr.data.filter(d=>parseInt(JSON.parse(JSON.stringify(d.cena)).replace('.',''))<val))))
  //   console.log(noviNiz);
  //   this.setState({ filt: noviNiz });
  // };

  render() {
    return (
      <div>
        {" "}
        <div className="products">
          <div className="unutra">
            {this.props.products.map(product =>(
              <div className="check" key={product.index}>
                <label htmlFor={product.index}>{product.name}</label>
                <input
                  type="checkbox"
                  id={product.index}
                  value={product.name}
                  onChange={this.show}
                  className={this.state.ischk ? this.state.ischk : ""}
                  defaultChecked={this.state.ischk}
                />
              </div>
            ))}
          </div>
          <div className="gdee">
            <Gde />
          </div>
        </div>
        <div className="des">
          {this.state.pros.map(pro => (
            <Kartica
              key={pro.id}
              className="desno"
              p={pro}
              dodaj={this.props.dod}
              id={this.props.idi}
              kupov={this.props.kupovina}
              azur={this.props.azurira}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Side;
