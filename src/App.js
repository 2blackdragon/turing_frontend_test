import Header from "./components/header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/footer/Footer";

function App() {

  const alldata = {
    1:{
      title: "Бургеры и роллы",
      data: {
        1: {
        title: "Чикенбургер",
        subtitle: "129 г",
        price: "от 62 руб",
        image: "/images/chicken_burger.png"
        },
        2: {
          title: "Чикен Хит Грибной",
          subtitle: "",
          price: "от 135 руб",
          image: "/images/chicken_hit.png"
        },
        3: {
          title: "Цезарь Ролл",
          subtitle: "211 г",
          price: "от 179 руб",
          image: "/images/roll.png"
        }
      }
    },
    2:{
      title: "Закуски",
      data: {
        1: {
        title: "Картофель Фри",
        subtitle: "Маленький",
        price: "от 65 руб",
        image: "/images/french_fries.png"
        },
        2: {
          title: "Нагетсы",
          subtitle: "4 шт.",
          price: "от 59 руб",
          image: "/images/nuggets.png"
        },
        3: {
          title: "Гранд Фри",
          subtitle: "Маленький",
          price: "от 65 руб",
          image: "/images/grand_french_fries.png"
        }
      }
    },
    3:{
      title: "Напитки",
      data: {
        1: {
        title: "Латте",
        subtitle: "Средний",
        price: "от 109 руб",
        image: "/images/latte.png"
        },
        2: {
          title: "Апельсиновый сок",
          subtitle: "Маленький",
          price: "от 92 руб",
          image: "/images/juice.png"
        },
        3: {
          title: "Милкшейк",
          subtitle: "Маленький",
          price: "от 89 руб",
          image: "/images/milkshake.png"
        }
      }
    },
  }

  const result = [];
    Object.keys(alldata).forEach((key, index) => {
        result.push(alldata[key]);
    });
  return (
    <div className="App">
      <Header />
      <h1>Меню для Насти</h1>
      {result.map((line, index) => {
                    return (
                        <Section data={line.data} title={line.title}/>
                    )
                  })}
      <Footer />
    </div>
  );
}

export default App;
