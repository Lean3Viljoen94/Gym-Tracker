import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, withIonLifeCycle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import WeekExcercisePage from './pages/WeekExcercisePage';
import DailyExcercisePage from './pages/DailyExcercisePage';
import { Week, TRANING_WEEKS } from './Model';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

interface AppPageState {
    weeks: Array<Week>; 
}

interface AppPageProps {
    
}

class App extends React.Component <AppPageProps, AppPageState> {

    constructor(props) {
        super(props);
        this.state = {
            weeks: []
        }
    }

    componentDidMount() {
        console.log('App ionicViewDidEnter');
        this.setState({
            weeks: TRANING_WEEKS
        });
    }
// Props are passed down from main App compoent to all child components to maintain coherence between all pages. 
    render() {
        return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/home" render={(props) => <Home {...props} {...this.state} />} />
                    <Route path="/weeks/:weekUrlId" render={(props) => <WeekExcercisePage {...props} {...this.state} />}/>
                    <Route path="/weeks/:weekUrlId/:resistanceUrlId" render={(props) => <DailyExcercisePage {...props} {...this.state} />}/>
                    <Redirect exact from="/" to="/home" />
                </IonRouterOutlet>
            </IonReactRouter>
            <link href="https://fonts.googleapis.com/css?family=Libre+Franklin|Lobster&display=swap" rel="stylesheet"></link>
        </IonApp>
        );
    }
}

export default withIonLifeCycle(App);
