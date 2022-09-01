### About

- This application was created while learning React.js.
- The application is a simple menu with snacks and cocktails, with a detailed description and the ability to sort.
- The application can be tested from the [link](https://s1een.github.io/react-menu-app/ "link").

# React Menu App

![](https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg)

## Technologies used in the development:

- [![React][React.js]][React-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-menu-app`

## Menu Page

States:

```javascript
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [drinks, setDrinks] = useState([]);
  const [tmp, setTmp] = useState([]);
  const [alco, setAlco] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
```
Fetching:

```javascript
async function fetchAlco() {
    for (let i = 0; i < 10; i++) {
      let response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      let data = await response.json();
      setDrinks((prev) => [...prev, data.drinks[0]]);
      setTmp((prev) => [...prev, data.drinks[0]]);
    }
  }
```
```javascript 
async function fetchByCategory(category) {
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    );
    let data = await response.json();
    fetchOne(data);
  }
```
Filter Items: 
```javascript 
function filterItems(category) {
    if (alco) {
      category === "all"
        ? setDrinks(tmp)
        : setDrinks(tmp.filter((el) => el.strCategory === category));
    } else {
      if (category === "all") {
        setMenuItems(items);
      } else {
        setMenuItems(items.filter((el) => el.category === category));
      }
    }
  }
```
## Drinks Page
States:

```javascript
  const [drink, setDrink] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let navigate = useNavigate();
```
Fetching: 
```javascript 
  async function fetchOneDrink() {
    setLoading(true);
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
    );
    let data = await response.json();
    if (data.drinks === null) {
      setError(true);
      return;
    }
    setDrink(data.drinks[0]);
    setLoading(false);
  }
```

## Acknowledgments
Resources that helped me in development.

* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [The CocktailDB](https://www.thecocktaildb.com/)
* [React Icons](https://react-icons.github.io/react-icons/search)

## My Links
- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/main.png
[React.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
[npm-url]: https://www.npmjs.com/
[linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
[linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
[telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/r3ason_why
[portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
[portfolio-url]: https://s1een.github.io/my_cv_site/

