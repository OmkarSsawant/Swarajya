import React, { Component } from 'react';
import './App.css';
import history from './static_data/info.json';
import Story from './Components/Story';

class App extends Component {


  constructor(props) {
    super(props);
    window.addEventListener('scroll', (ev) => {

      //page is at top
      if (window.scrollY < innerHeight - 170) {
        this.disableAll();
      }
      if (window.scrollY > innerHeight * 0.75) {
        this.EnableIt(0);
      }
      if (window.scrollY > (innerHeight * 2)) {
        this.EnableIt(1);
      }
      //ELement 3
      if (window.scrollY > (innerHeight * 5)) {
        this.EnableIt(2);
      }

      if (window.scrollY > (innerHeight * 6)) {
        this.EnableIt(3);
      }
      if (window.scrollY > (innerHeight * 7)) {
        this.EnableIt(4);
      }
      if (window.scrollY > (window.scrollMaxY - 570)) {
        this.EnableIt(5);
      }
    });
    this.state = {
      lang: 'English',
      throne: 'shivajiMaharaj',
      navIcons: ['🛕  ', '🚀  ', '⚔  ', '🎩  ', '👑  ', '🎩 ']
    }
  }



  getToTheView(index) {
    const lovedcontent = document.querySelectorAll('section.sec')[index];
    lovedcontent.scrollIntoView({ behavior: 'smooth' });
  }

  changeLanguage(index) {
    switch (index) {
      case 1:
        this.setState({ lang: 'Marathi' });
        break;
      case 2:
        this.setState({ lang: 'Hindi' });
        break;
      case 3:
        this.setState({ lang: 'English' })
        break;
      default:
        break;
    }
  }

  EnableIt(index) {
    const h1s = document.querySelectorAll('.unique > h1');
    const ps = document.querySelectorAll('.unique  > p');
    if (h1s[index].classList.contains('disabled')) {
      h1s[index].classList.add('Fade-down');
      h1s[index].classList.remove('disabled');
    }
    if (ps[index].classList.contains('disabled')) {
      ps[index].classList.add('FadeIn');
      ps[index].classList.remove('disabled');
    }
  }
  disableAll() {
    const h1s = document.querySelectorAll('.unique > h1');
    const ps = document.querySelectorAll('.unique  > p');
    //disable All 
    for (let i = 0; i < 5; i++) {
      h1s[i].classList.add('disabled');
      h1s[i].classList.remove('Fade-down');
      ps[i].classList.add('disabled');
      ps[i].classList.remove('FadeIn');

    }
  }
  onSeeMore() {

    window.scrollTo(0, 0);
  }
  render() {
    const concepts = history[this.state.lang][this.state.throne];
    const Navigators = this.state.navIcons.map((icon, index) => (
      <div name='a' className="Navs" onClick={() => this.getToTheView(index)}>{icon} {concepts[index].title}</div>
    ));

    // console.log(concepts);
    const logo = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="#534a" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>;

    const Storys = concepts.map((concept, ind) => (
      <section className="sec">
        <Story key={concept.title.toString() + (Math.random() * 100)} concept={concept} index={ind}>
        </Story>
      </section>));

    const images = history.phases;

    const moreIcon = <svg class="MuiSvgIcon-root jss458 MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize large"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>;

    const parallaxImages = images.map((phase) => (
      <div className={"ParallaxImage".concat(phase)}>
      </div>));

    const elements = [parallaxImages[0], Storys[0], parallaxImages[1], Storys[1], parallaxImages[2], Storys[2], parallaxImages[3], Storys[3], parallaxImages[4], Storys[4], parallaxImages[5], Storys[5]];
    console.log("rendering");

    const laguageChanger = (<div id="langH" name='a' className="Navs">
      {logo}
      <div className="tog" >
        <button id="btn1" onClick={() => this.changeLanguage(1)} >Marathi</button>
        <button id="btn2" onClick={() => this.changeLanguage(2)} >Hindi</button>
        <button id="btn3" onClick={() => this.changeLanguage(3)} >English</button>
      </div>
    </div>);
    const more = (<div name='a' id="more" className="Navs" onClick={() => {
    }} >
      {moreIcon}
      <div className="timelineContainer" >
        <input type="radio" name="Shivaji Maharaj" value="ShivajiMaharaj" onChange={(ev) => { console.log(ev) }}></input>
        <input type="radio" name="Sambhaji Maharaj" value="SambhajiMaharaj" onChange={(ev) => { console.log(ev) }}></input>
        <input type="radio" name="Rajaram Maharaj" value="RajaramMaharaj" onChange={(ev) => {console.log(ev)}}></input>
      </div>
    </div>);
    return (
      <React.Fragment>

        <nav className="Navigator">
          <div name='a' className="Navs" onClick={() => {
            const Info = document.querySelector('.Main-Header');
            console.log("navigating");
            Info.scrollIntoView({ behavior: 'smooth' });
          }}>
            {'🏘'}
            Home</div>
          {[...Navigators, laguageChanger, more]}
        </nav>
        <div className="Main-Header">
          <h1 >{history.titles[this.state.lang]}</h1>
          <p>The great warrior of Maharastra </p>
        </div>
        {[...elements,
        <button className="SM btn-grad" onClick={() => this.onSeeMore()}>
          See More
      </button>
        ]}

      </React.Fragment>
    );


  }


}

export default App;
