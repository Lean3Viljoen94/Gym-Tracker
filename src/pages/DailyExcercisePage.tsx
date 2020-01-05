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

interface Exercise {
    name: string;
    completed: boolean;
    activities: Array<{
        activation: string;
        pyramid: string;
        supersets: string;
    }>
}

interface WeekExcercisePageState {
    week: Week;
    resistance: Exercise;
}

interface WeekExcercisePageProps extends RouteComponentProps<{
    weekUrlId: string;
    resistanceUrlId: string;
}> {}

class DailyExcercisePage extends React.Component<WeekExcercisePageProps, WeekExcercisePageState> {

    constructor(props){
        super(props);
        this.state = {
            week: null,
            resistance: null
        }
    }

    ionViewDidEnter() {
        console.log('ionViewDidLeave event 2 fired')
        const week = TRANING_WEEKS.find(trainingWeek => {
            return trainingWeek.keyName === this.props.match.params.weekUrlId
        });
        const resistanceExcersise = week.resistance.find(resistanceTraningInWeek => {
            return resistanceTraningInWeek.keyName === this.props.match.params.resistanceUrlId
        });
        this.setState({ 
            week: week,
            resistance: resistanceExcersise
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
                    { this.state.week ? <IonTitle>{this.state.week.week}</IonTitle> : <IonTitle>Loading...</IonTitle> }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCardContent>
                    { this.state.week && 
                        <ul>
                        {
                            this.state.week.resistance.map(resistanceTraining => {
                                return (<IonButton expand="full" key={resistanceTraining.name} onClick={() => console.log('success')}> { resistanceTraining.name } </IonButton>);
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

export default withIonLifeCycle(DailyExcercisePage);
