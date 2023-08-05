
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/Home';
import NewPost from './components/NewPost';
import About from './components/About';
import Footer from './components/Footer';
import PostPage from './components/PostPage';
import Missing from './components/Missing';
import {Route,Switch } from 'react-router-dom';
import EditPost from './components/EditPost';
import {DataProvider} from './context/DataContext';

function App() {

  return (
    <div className="App">
      <Header title='Netcool Alarm List'/>
      <DataProvider>   
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/post" component={NewPost}/>
            <Route  path="/edit/:id" component={EditPost}/>
            <Route path="/post/:id" component={PostPage}/>
            <Route path="/about" component={About} />
            <Route path="*" component={Missing}/>
          </Switch> 
          <Footer/>
     </DataProvider>
    </div>
  );
}

export default App;
