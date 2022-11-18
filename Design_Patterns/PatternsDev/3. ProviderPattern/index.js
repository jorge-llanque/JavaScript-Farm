/**
 * PROVIDER PATTERN
 * Make data available to multiple child components.
 * - The Provider Pattern is very useful for sharing global data.
 * - It reduces the risk of accidentally introducing bugs when refactoring code.
 * - In some cases, overusing the Provider pattern can result in performance issues. All components
 *   that consume the context re-render on each state change.
 */


function App(){
  const data = { /*...*/ };

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar/>
        <Content/>
      </DataContext.Provider>
    </div>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const ListItem = () => {
  const {data} = React.useContext(DataContext);
return <span>{data.listItem}</span>;
}

const Content = () => (
  <div>
    <Header />
    <Block />
  </div>
)

const Header = () => {
  const {data} = React.useContext(DataContext);
  return <div>{data.title}</div>
}
const Block = () => <Text/>
const Text = () =>{
  const {data} = React.useContext(DataContext);
  return <div>{data.text}</div>
} 