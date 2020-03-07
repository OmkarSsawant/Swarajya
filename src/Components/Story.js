import React from 'react';
import JantaRaja from '../assets/chhatrapati.png';
import BirthImage from '../assets/image-1.jpg';
import UpBringing from '../assets/UP_BRINGING.jpg';
import AfzalCompact from '../assets/afzal.jpg';
import ArrInAgra from '../assets/NOTArresrtInAgra.jpg';
import LionKing from '../assets/RA.jpeg';
import RaigadStatue from '../assets/Shivaji_Maharaj_Raigad.jpg';



class Story extends React.Component {
    
    
    
    constructor(props) {
        super(props);
        const conceptI = props.concept == null ? { 'title': '', 'description': '' } : props.concept;
    
          this.state = {
            title: conceptI.title,
            description: conceptI.description,
            index:props.index,
            imgHeight:0,
            image:JantaRaja
        }
    }
    
 componentDidMount(){
   
     const images=[BirthImage,UpBringing,AfzalCompact,ArrInAgra,LionKing,RaigadStatue];
    let _img = images[this.state.index];
   
    let height = this.getCurrentHeight(this.state.index);
    console.log("CUR_HEIGHT : = > ",height);
    this.setState({image:_img,imgHeight:height});      


 }


getCurrentHeight(index){
   let clheight = document.querySelectorAll('.unique')[index].clientHeight;
   console.log(`height @ ${index} is ${clheight}`);
   return clheight - clheight*0.1;
}
    render() {

//    console.log(isRajyabhishek);
   const elheight = this.state.imgHeight;
        return (
            <div  className="unique" >
                <img  src={this.state.image} height={elheight} alt="img"/>
                <h1 className="Header disabled " onClick={() => console.log('Title')}>
                    {this.state.title}</h1>
                <p className="desc disabled">
                    {this.state.description}
                </p>
                </div>
            // </div>
        );
    }
}

export default Story;