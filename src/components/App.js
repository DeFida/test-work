import { useEffect, useState } from 'react';
import '../styles/App.css';

import Header from './Header';
import UserInfo from './UserInfo';
import UserResults from './UserResults';
import Diagnosis from './Diagnosis';
import Survey from './Survey';



function App() {



  const [results, setResult] = useState([]);

  const [surveyBlock, toggleSurveyBlock] = useState(false);
  
  useEffect(() => {
      setResult([
        {
          id: 0,
          component: "ТТГ",
          the_result: 3.82,
          the_result_str: "3,82",
          unit: "мкМЕ/мл",
          norm_min: 0.40,
          norm_min_str: "0,40",
          norm_max: 3.77,
          norm_max_str: "3,77",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 1,
          component: "Свободный Т3",
          the_result: 3.12,
          the_result_str: "3,12",
          unit: "пг/мл",
          norm_min: 2.00,
          norm_min_str: "2,00",
          norm_max: 4.40,
          norm_max_str: "4,40",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 2,
          component: "Свободный Т4",
          the_result: 0.92,
          the_result_str: "0,92",
          unit: "нг/мл",
          norm_min: 1.00,
          norm_min_str: "1,00",
          norm_max: 1.70,
          norm_max_str: "1,70",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 3,
          component: "Анти ТПО",
          the_result: 16,
          the_result_str: "16",
          unit: "МЕ/мл",
          norm_min: 0,
          norm_min_str: "0",
          norm_max: 34,
          norm_max_str: "34",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 4,
          component: "Анти ТГ",
          the_result: 10,
          the_result_str: "10",
          unit: "МЕ/мл",
          norm_min: 0,
          norm_min_str: "0",
          norm_max: 115,
          norm_max_str: "115",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 5,
          component: "ПСА общий",
          the_result: 1.060,
          the_result_str: "1,060",
          unit: "нг/мл",
          norm_min: 0.000,
          norm_min_str: "0,000",
          norm_max: 2.000,
          norm_max_str: "2,000",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 6,
          component: "Индекс свободного ПСА",
          the_result: 47.17,
          the_result_str: "47,17",
          unit: "%",
          norm_min: 15,
          norm_min_str: "15",
          norm_max: -1,
          norm_max_str: "",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 7,
          component: "ПСА свободный",
          the_result: 40.50,
          the_result_str: "40,50",
          unit: "%",
          norm_min: -1,
          norm_min_str: "",
          norm_max: -1,
          norm_max_str: "",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
        {
          id: 8,
          component: "Тиреоглобулин",
          the_result: 13.77,
          the_result_str: "13.77",
          unit: "нг/мл",
          norm_min: 1.4,
          norm_min_str: "1,4",
          norm_max: 78,
          norm_max_str: "78",
          color: "",
          problem: function() {
            return this.comment() === "В норме" ? 0 : this.comment() === "Выше нормы" ? 1 : -1
          },
          comment: function() {
            if (this.the_result <= this.norm_max && this.the_result >= this.norm_min) {
              this.color = "#9CD3C2";
              return "В норме";
            }
            else if (this.norm_max !== -1 && this.the_result > this.norm_max) {
              this.color = "#EB6574";
              return "Выше нормы";
            }
            else if (this.norm_min !== -1 && this.the_result < this.norm_min) {
              this.color = "#EB6574";
              return "Ниже нормы";
            }
            else {
              this.color = "#9CD3C2";
              return "В норме";
            }
          },
          
        },
      ]);

  }, [])

  function startSurvey() {
    toggleSurveyBlock(true);
  }


  function changeTheVal(value) {
    const tochange = [...results];
    tochange[value.id].the_result = value.the_result;
    tochange[value.id].unit = value.unit;

    setResult(tochange);

  }

  useEffect(()=>{
    console.log(results);
  }, [results])
  


  return (

    
    <div className="App">
      <Header />
      {/* <UserInfo />

      <UserResults results={results} changeTheVal={changeTheVal} />
      <Diagnosis results={results} startSurvey={startSurvey} />
      {surveyBlock && <Survey />} */}

    </div>
  );
}

export default App;
