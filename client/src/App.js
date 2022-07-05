import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AddJob } from './component/addJob';
import { Login } from './component/login';
import { Nav } from './component/nav';
import { Privatecomponent } from './component/privateComponent';
import { JobList } from './component/joblist';
import { Signup } from './component/signUp';
import { Update } from './component/update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
<Routes>
<Route element={<Privatecomponent/>}>
  <Route path='/' element={<JobList/>}/>
  <Route path='/add' element={<AddJob/>}/>
  <Route path='/profile' element={<h1>profile page</h1>}/>
  <Route path='/update/:id' element={<Update/>}/>
  <Route path='/logout' element={<Signup/>}/>
  </Route>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>} />
</Routes>
  </BrowserRouter>
    </div>
  
  );
}

export default App;
