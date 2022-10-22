/**
 * RENDER PROPS PATTERN
 * Pass JSX elements to components through props.
 * A render prop is a prop on a component, which value is a function that returns a JSX element. The 
 * component itself does not render anything besides the render prop. Instead, the component simply calls
 * the render prop, instead of implementing its own rendering logic.
 */

const Title = props => props.render();
<Title render ={() => <h1>I am a render prop!</h1>}/>

/**
 * A render prop doesn't have to be called render. Any prop that render JSX is considered a render
 * prop!
 */

const Title2 = (props) => (
  <>
  {props.renderFirstComponent()}
  {props.renderSecondComponent()}
  {props.renderThirdComponent()}
  </>
);

// Another example
const Input = (props) => {
  const [value, setValue] = useState("");

  return(
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in C"
      />
      {props.render(value)}
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Input
        render={value => (
          <>
            <Kelvin value={value}/>
            <Fahrenheit value={value}/>
          </>
        )}
      />
    </div>
  )
}

/**
 * Besides regular JSX components, we can pass functions as children to React components. This function
 * is available to us through the children prop, which is technically also a render prop.
 */
const App2 = () => {
  return(
    <div className="App">
      <h1>Temperature Converter</h1>
      <Input>
        {value => (
          <>
            <Kelvin value={value}/>
            <Fahrenheit value={value}/>
          </>
        )}
      </Input>
    </div>
  )
}

/**
 * PROS
 * Sharing logic and data among several components is easy with the render props pattern. Components
 * can be made very reusable, by using a render or children prop. Although the Higher Order Component
 * pattern mainly solves the same issues, namely reusability and sharing data, the render props pattern
 * solves some of the issues we could encounter by using the HOC pattern.
 * 
 * CONS
 * The issues that we tried to solve with render props, have largely been replaced by React Hooks. As
 * Hooks changed the way we can add reusability and data sharing to components, they can replace the render
 * props pattern in many cases.
 * 
 * Since we can't add lifecycle methods to a render prop, we can only use it on components that don't need
 * to alter the data they receive.
 */