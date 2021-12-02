// used for defining different paths 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
    <div>
      {/* / -> default path */}
      {/* depending on the path, we see which component should be loaded */}
      {/* we use BrowserRouter for rendering only one component at a time */}
      {/* all components from here will be rendered as a page, except navigation which will be a menu and will appear on every page */}
      <BrowserRouter>
        <MainNavigation>
        </MainNavigation>
        <Routes>
          <Route path='/' element={<AllMeetupsPage></AllMeetupsPage>}>
          </Route>
          <Route path='/new-meetup' element={<NewMeetUpPage></NewMeetUpPage>}>
          </Route>
          <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
