/**
 * HOC Pattern
 * - Pass reusable logic down as props to components throughout your application.
 * - Within our application, we often wnat to use the same logic in multiple components, this logic can
 *   include applying a certain styling to components, requiring authorization, or adding a global state.
 * - One way of being able to reuse the same logic in multiple components is by using the higher order
 *   component pattern. This pattern allows us to reuse component logic throughout our application.
 * - The Higher Order Component pattern allows us to provide the same logic to multiple components, while
 *   keeping all the logic in one single place. 
 *
 */

/**
 * Say that we always wanted to add a certain styling to multiple components in our application. Instead
 * of creating a style object locally each time, we can simply  create a HOC that adds the style objects
 * to the component that we pass to it.
 */
function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props}/>
  }
}

const Button = () => <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);


/**
 * Dog Images render loading with HOC Pattern
 */
function withLoader(Element, url){
  return props => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData(){
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }
      getData();
    },[])
    if(!data) return <h1>Loading...</h1>
    return <Element data={data} {...props}/>
  }
}

function DogImages(props){
  return props.data.message.map((dog, index) => (
    <img src={dog} key={index} alt="Dog"/>
  ))
}

withLoading(DogImages, '//dog.ceo/api/breed/labrador/images/random/10');



