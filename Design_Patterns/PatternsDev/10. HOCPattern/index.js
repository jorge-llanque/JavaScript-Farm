  /**
 * HOC Pattern
 * - Pass reusable logic down as props to components throughout your application.
 * - Within our application, we often want to use the same logic in multiple components, this logic can
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

withLoader(DogImages, '//dog.ceo/api/breed/labrador/images/random/10');


/**
 * COMPOSING
 * We can also compose multiple HOCs, let's say that we also want to add functionality
 * that shows a Hovering!, text box when the user hovers over the DogImages list.
 */

withHover(
  withLoader(DogImages, '//dog.ceo/api/breed/labrador/images/random/10');
)

/**
 * HOOKS
 * In some cases, we can replace the HOC pattern with React Hooks.
 */

function useHover(){
  const [hovering, setHover] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if(node){
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return() => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      }
    }
  }, [ref, hovering]);
}

/**
 * Generally speaking, React Hooks don't replace the HOC pattern.
 * As the React docs tell us, using Hooks can reduce the depth of the component tree.
 * Using the HOC pattern, it's easy to end up with a deeply nested component tree.
 */
<withAuth>
  <withLayout>
    <withLogging>
      <Component/>
    </withLogging>
  </withLayout>
</withAuth>

/**
 * Best use-cases for a HOC:
 * - Uncustomized behavior needs to be used by many components throughout the application.
 * - The component can work standalone, without the added custom logic.
 * Best use-cases for Hooks:
 * - The behavior has to be customized for each component that uses it.
 * - The behavior is not spread throughout the application, only one or a few components use the behavior.
 * - The behavior adds many properties to the component.
 */

/**
 * PROS
 * Using the Higher Order Component pattern allows us to keep logic that we want to reuse all in one place.
 * This reduces the risk of accidentally spreading bugs throughout the application by duplicating code
 * over and over, potentially introducing new bugs each time. By keeping the logic all in one place, we can
 * keep our code DRY and easily enforce separation of concerns.
 * 
 * CONS
 * The name of the prop that a HOC can pass to an element, can cause a naming collision.
 * When using multiple composed HOCs that all pass props to the element that's wrapped within them, it can
 * be difficult to figure out which HOC is responsible for which prop. This can hinder debugging and scaling
 * an application easily.
 */
function withStyles(Component){
  return props => {
    const style = {
      padding: '0.2rem',
      margin: '1rem',
      ...props.style
    }
    return <Component style={style} {...props}/>
  }
}
const Button = () => <button style={{color: 'red'}}>Click me!</button>
const StyledButton = withStyles(Button);