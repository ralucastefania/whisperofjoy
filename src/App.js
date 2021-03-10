import React from "react";
import reactDom from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import CookiesPopup from "./components/CookiesPopup";
import Datenschutz from "./components/Datenschutz";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Menu from "./components/Menu";
import Shop from "./components/Shop";
import ShoppingCartPopup from "./components/ShoppingCartPopup";
import Stories from "./components/Stories";

export const WhisperContext = React.createContext(null);

function App() {
  const [state, dispatch] = React.useReducer(stateUpdater, {
    cookiesPopupVisible: true,
    blogs: [
      {
        id: 0,
        title: "First Letter",
        img: "benoclu.jpg",
        text:
          "I am writing you as our encounter this morning has been a bit unpleasant for me. First of all let me apologise for taking you by surprise with my enthusiasm. I really did not think it would scare you that much and make you hit me like that. I mean, my cheek still feels a bit funny from your claws. Second of all, let me assure you of my friendship and good intentions. You are more than welcomed to cross my humans’ terrace anytime you wanna take your rounds around the neighbourhood. An answer from you would make my tail wiggle of extreme happiness. Big hugs, S.",
      },
      {
        id: 1,
        title: "Second Letter",
        img: "benoclu.jpg",
        text:
          "Since I am a cat let me tell you something: I don’t effing trust you!!! As for the hit over your face let’s just call it a pay off for all the scares and crazy situations your fellows made me go through. Also, due to my experiences with dogs, a friendship between you and me is less than probable, so take a walk and let me alone. Sharp Claws",
      },
      {
        id: 2,
        title: "Third Letter",
        img: "benoclu.jpg",
        text:
          "It has been a while since I last saw you. I hope my letter finds you in a good state of health and wealth. I want to tell you about a strange thing that happens to me every time I want to explore the outside world: the humans put something around my neck and this is attached to a long cord. I saw you roam free and I remember my siblings from the farm had to wear no such thing. Since I see no point in having it on, I am refusing to walk while being treated so obnoxiously. Big hugs, S.",
      },
      {
        id: 3,
        title: "Fourth Letter",
        img: "benoclu.jpg",
        text:
          "Dog, ( 8th June)The thing your humans make you wear is called a leash and it has a very well determined purpose: for you not to lose them. Humans usually say it is so that they don’t lose you, but I am more than sure they say it because they are ashamed they can’t walk and run as fast as you. I, as a cat, am very grateful to this invention, since it makes my walks a bit safer :) Many of your fallows have an outburst when they see a cat. Could you explain this to me? How do they get to act so insanely? Is there like a summer camp or something that teaches you how to bark like crazy when seeing us? Sharp Claws",
      },
    ],
    shoppingCart: [],
    products: [
      {
        id: 0,
        title: "#happy",
        img: "benoclu.jpg",
      },
      {
        id: 1,
        title: "#mucenici",
        img: "benoclu.jpg",
      },
      {
        id: 2,
        title: "#merry",
        img: "benoclu.jpg",
      },
      {
        id: 3,
        title: "#christmas",
        img: "benoclu.jpg",
      },
      {
        id: 4,
        title: "#pasca",
        img: "benoclu.jpg",
      },
    ],
  });

  function stateUpdater(state, action) {
    const newState = { ...state }
    switch (action.message) {
      case "closeCookiesPopup":
        newState.cookiesPopupVisible = false;
        break;
      case "addProductInCart":
        let index = 0
        for(let i=0; i<newState.length; i++){
          if(newState.products[i].id == action.code) {
            index = i
            break
          }
        }
        newState.shoppingCart.push(newState.products[index])
        newState.products.splice(index,1)
        console.log(newState.shoppingCart)
        break;

      default:
        break;
    }

    return newState
  }

  // React.useEffect(() => {
  //   fetch("https://api.mocki.io/v1/da124ea4")
  //     .then(response => response.json())
  //     .then(response => dispatch({
  //       type: 'updateEmail',
  //       newEmail: response.email
  //     }))
  //   setTimeout(() => {
  //     dispatch({type: 'subscribePopupVisibleON'})
  //   }, 2000);
  // }, []);

  return (
    <WhisperContext.Provider value={{ dispatch, state }}>
      <div className="container">
        <Header />
        <Menu />
        <ShoppingCartPopup/>
        <div className="switch-container">
          <Switch>
            <Route path="/stories">
              <Stories />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/impressum">
              <Impressum />
            </Route>
            <Route path="/datenschutz">
              <Datenschutz />
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
        {state.cookiesPopupVisible && <CookiesPopup/>}
      </div>
    </WhisperContext.Provider>
  );
}

export default App;
