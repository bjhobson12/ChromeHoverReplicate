import logo from './logo.svg';
import Input from './components/Input'
import Button from './components/Button'
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import Loader from './assets/tail-spin.svg';
import './App.scss';

function App() {

    const [payload, setPayload] = useState([]);
    const [settingsVisible, setSettingsVisible] = useState(null);
    const [loadingVisible, setLoadingVisible] = useState(true);
    const [searchField, setSearchField] = useState('');


    //const location = useLocation();

    useEffect(() => {
        
        setLoadingVisible(false)

    }, []);

  return (
    <div className="App">
      <section className="map-browser">

<CSSTransition
    in={!!settingsVisible} 
    timeout={200}
    onEntered={() => {

    }}
    className="settings-panel-transition"
    >
        <div style={{display: `${settingsVisible!=null ? 'flex' : 'none'}`}}>
            <ul>
                <li>
                    <></>
                    <div className="expandable" >
                        <Input 
                        id="search-input" 
                        placeholder="Search" 
                        value={searchField} 
                        onChange={setSearchField} 
                        label="search"/>
                    </div>
                </li>
                <li>
                    <></>
                    <div className="expandable" >
                        <Input id="search-input" placeholder="Filter" label="filter"/>
                    </div>
                </li>
                <li>
                    <></>
                    <div className="expandable" >
                        <Input id="search-input" placeholder="Location" label="location"/>
                    </div>
                </li>
                <li>
                    <></>
                    <div className="expandable" >
                        <Input id="search-input" placeholder="Time" label="time"/>
                    </div>
                </li>
            </ul>
            <div className="fixed-tab">
                <div className="expandable" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button label={'Take me Home'} to={'/'}/>
                    <Button label={'Search'} onClick={()=>{
                    }}/>
                </div>
            </div>
        </div>
        </CSSTransition>

        <div className="map-panel">

            <CSSTransition
                in={loadingVisible} 
                timeout={700}
                className="loader"
                >
                <div><img src={Loader} /></div>
            </CSSTransition>

            <div className="psuedo-after" 
                data-collapsed={!settingsVisible}
                onClick={() => {
                    setSettingsVisible(!settingsVisible)
                    console.log('clicked')
                }}>
                    <h4>{settingsVisible ? '←' : ''}</h4>
            </div>
            {
                loadingVisible &&
                <Skeleton style={{height: '100%', zIndex: 100}}/>
            }
            <div style={{backgroundColor: 'grey', width: '100%', height: '100vh'}}>

            </div>
        </div>

        </section>
    </div>
  );
}

export default App;
