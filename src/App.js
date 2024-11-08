import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import BookNow from './components/BookNow';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import BookingConfirmed from './components/BookingConfirmed';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Home />
        </RouterProvider>
    </Provider>
  </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booknow",
    element: <BookNow />,
  },
  {
    path: "/bookingconfirmed",
    element: <BookingConfirmed/>,
  },
]);

export default App;