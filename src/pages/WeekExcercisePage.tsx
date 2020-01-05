import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardContent,
    withIonLifeCycle
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Week, TRANING_WEEKS } from '../Model';

interface WeekExcercisePageState {
    exersizeForWeek: Week;
}

interface WeekExcercisePageProps extends RouteComponentProps<{
    weekUrlId: string;
}> {}

class WeekExcercisePage extends React.Component <WeekExcercisePageProps, WeekExcercisePageState> {

    constructor(props){
        super(props);
        this.state = {
            exersizeForWeek: null
        }
    }

  ionViewDidEnter() {
      console.log('ionViewDidLeave event fired')
      console.log(this.props.match.params);
      const week = TRANING_WEEKS.find(trainingWeek => {
          return trainingWeek.keyName === this.props.match.params.weekUrlId
      });
      console.log(week);
      this.setState({ 
        exersizeForWeek: week
      });
  }


    render() {
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home"/>
                        </IonButtons>
                        { this.state.exersizeForWeek ? <IonTitle>{this.state.exersizeForWeek.week}</IonTitle> : <IonTitle>Loading...</IonTitle> }
                    </IonToolbar>
                </IonHeader>
            <IonContent>
            <IonCardContent>
                { this.state.exersizeForWeek && 
                    <ul>
                        {
                            this.state.exersizeForWeek.resistance.map(resistanceTraining => {
                                return (<IonButton expand="full" key={resistanceTraining.name}
                                 onClick={() => this.props.history.push(this.props.match.url + '/' + resistanceTraining.keyName)}> { resistanceTraining.name } </IonButton>);
                            })
                        }
                    </ul>
                }
                        </IonCardContent>
            </IonContent>
          </IonPage>
        );
    }
}

export default withIonLifeCycle(WeekExcercisePage);
