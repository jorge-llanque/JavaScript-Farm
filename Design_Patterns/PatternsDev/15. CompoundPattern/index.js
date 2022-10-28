/**
 * COMPOUND PATTERN
 * Create multiple components that work together to perform a single task.
 * - You often see this with components like select, dropdown components, or menu items. The compound
 *   component pattern allows you to create components that all work together to perform a task.
 */

/**
 * We have a list of squirrel images! Besides just showing squirrel images, we want to add a button
 * that makes it possible for the user to edit or delete the image. We can implement a FlyOut component
 * that shows a list when the user toggles the component.
 */

/**
 * The Compound pattern is great when you're building a component library. You'll often see
 * this pattern when using UI libraries like Semantic UI.
 */

const sources = [];
export default function ImageList(){
  return sources.map((source, i) => <Image source={source} key={i}/>)
}

///////////////////////////////////////////////
function Image({source}){
  return(
    <div className="image-item">
      <img src={source} alt="Squirrel" />
      <FlyOutMenu/>
    </div>
  );
}

///////////////////////////////////////////////
function FlyOutMenu(){
  return(
    <FlyOut>
      <FlyOut.Toggle>
        <FlyOut.List>
          <FlyOut.Item>Edit</FlyOut.Item>
          <FlyOut.Item>Delete</FlyOut.Item>
        </FlyOut.List>
      </FlyOut.Toggle>
    </FlyOut>
  )
}

////////////////////////////////////////////

const FlyOutContext = React.createContext();

function FlyOut(){
  const [open, toggle] = React.useState(false);

  return(
    <div className={"flyout"}>
      <FlyOutContext.Provider value={{open, toggle}}>
        {props.children}
      </FlyOutContext.Provider>
    </div>
  )
}

function Toggle(){
  const {open, toggle} = React.useContext(FlyOutContext);
  return(
    <div onClick={() => toggle(!open)}>
      <Icon/>
    </div>
  )
}

function List({children}){
  const {open} = React.useContext(FlyOutContext);
  return open && <ul className="flyout-list">{children}</ul>
}

function Item({children}){
  return <li className="flyout-item">{children}</li>
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

////////////////////////////////////////////


/**
 * React.Children.map
 * We can also implement the Compound Component pattern by mapping over the children of the component.
 * We can add the open and toggle properties to these elements, by cloning them with the additional props.
 */
function FlyOut({props}){
  const [open, toggle] = React.useState(false);

  return(
    <div>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {open, toggle})
      )}
    </div>
  )
}

// Pros
// - Compound components manage their own internal state, which they share among the several child components.
// - When implementing a compound component, we don't have to worry about managing the state ourselves.

// Cons
// - When using the React.Children.map to provide the values, the component nesting is limited. Only direct
//   children of the parent component will have access to the open and toggle props, meaning we can't wrap
//   any of these components in another component.


/**
 * Cloning an element with React.cloneElement performs a shallow merge. Already existing props will be merged
 * together with the new props that we pass. This could end up in a naming collision, if an already existing
 * prop has the same name as the props we're passing to the React.cloneElement method. As the props are shallowly
 * merged, the value of that prop will be overwritten with the latest value that we pass.
 */