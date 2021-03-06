import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './redux/store'
import MainWindow from './MainWindow'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={MainWindow}/>
      </BrowserRouter>
    </Provider>
  )
}

export default App