/**
 * CONTAINER / PRESENTATIONAL PATTERN
 * Enforce separation of concerns by separating the view from the application logic.
 * - Presentational Component receives its data through props. Its primary function is to simply display
 *   the data it receives the way we want them to, including styles, without modifying that data.
 * - Container Component themselves usually don't render any other components besides the presentational
 *   components that care about their data.
 * - Presentational Components are easily made reusable, as they simply display data without altering this data.
 * - We can reuse the presentational components throughout our application for different purposes.
 */

// Presentational Component
export function DogImages({dogs}){
  return dogs.map((dog,i) => <img src={dog} key={i} alt="Dog"/>)
}

// Container Component
export class DogImagesContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount(){
    fetch("https://dog.ceo/api/breed/labrador")
      .then(res => res.json())
      .then(({message}) => this.setState({dogs: message}));
  }

  render(){
    return <DogImages dogs={this.state.dogs}/>
  }
}

/**
 * In many cases, the Container/Presentational pattern can be replaced with React Hooks.
 */

// Custom Hook
export function useDogImages(){
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador")
      .then(res => res.json())
      .then(({message}) => setDogs(message));
  },[]);
  return dogs;
}

export function DogImages(){
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog"/>)
}