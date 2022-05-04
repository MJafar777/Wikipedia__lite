import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";
import "./style.css";
import "../components2/Design.css";
import Weather from "./Weather";
import Header from "./Header";
import Youtube from "./Youtube";

import Redux from 'redux'


console.clear();


const signUpContract = (name , money)=>{
  return {
    type:"siginUp",
    payload:{
      name: name,
      amout:money
    }
  }
}


const getMoney = (name,amout)=>{
  return {
    type: "getMoney",
    payload:{
      name:name,
      amount:amout
    }
  }
}


const cancelContract = (name)=>{
  return {
    type:"Cancel",
    payload:{
      name:name
    }
  }
}




const cleamHistory = (form, history=[])=>{
  if(form.type ==="getMoney"){
    return history = [...history, form.payload];
  }
  return history;
}  


const acounting = (form , AllMoney = 100)=>{
  if(form.type ==="siginUp"){
    return AllMoney += form.payload.amount; 
  }
  else if(form.type ==="getMoney"){
    return AllMoney -=form.payload.amount;
  }
  return AllMoney;
}


const policies = (form , history=[])=>{
  if(form.type ==="siginUp"){
    return history= [...history, form.payload];
  }
  return history;
}

const {configureStore , combineReducers} = Redux;

const departaments = combineReducers({
  acounting : acounting,
  cleamHistory: cleamHistory,
  policies: policies
})


const store = configureStore(departaments);


store.dispatch(getMoney("umid" , 10));
console.log(store.getState());

/////////////////////////////////////////////////
















const dataAccordion = [
  { savol: "qalay", javob: "zur1" },
  { savol: "qalay", javob: "zur2" },
  { savol: "qalay", javob: "zur3" },
  { savol: "qalay", javob: "zur4" },
];

const dataDropdown = [
  { label: "The Color Red", value: "red" },
  { label: "The Color green", value: "green" },
  { label: "The Color blue", value: "blue" },
];
const fackFunc = (a) => {
  console.log(a);
};
const router = () => {
  if (window.location.pathname === "/") {
    return <Accordion data={dataAccordion} />;
  }
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
  if (window.location.pathname === "/dropdown") {
    return <Dropdown getData={fackFunc} data={dataDropdown} label="Dropdown" />;
  }
  if (window.location.pathname === "/search") {
    return <Search />;
  }
  if (window.location.pathname === "/youtube") {
    return <Youtube />;
  }
  if (window.location.pathname === "/unsplash") {
    return <Weather />;
  }
};
const App = () => {
  return (
    <div>
      <Header />  
      <div>{router()}</div>
    </div>
  );
};

export default App;
