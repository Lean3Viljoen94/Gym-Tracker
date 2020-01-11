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
    withIonLifeCycle,
    IonCard,
    IonCardHeader,
    IonList,
    IonItem, 
    IonLabel
  } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Week, TRANING_WEEKS } from '../Model';
import "../style/excercisePages.css";


interface Exercise {
    name: string;
    completed: boolean;
    activities: {
        activation: Array<string>;
        pyramid: Array<string>;
        supersets: Array<string>;
    }
}

interface DailyExcercisePageState {
    week: Week;
    resistance: Exercise;
}

interface DailyExcercisePageProps extends RouteComponentProps<{
    weekUrlId: string;
    resistanceUrlId: string;
}> {}

class DailyExcercisePage extends React.Component<DailyExcercisePageProps, DailyExcercisePageState> {

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
                    { this.state.week ? <IonTitle>{this.state.week.week} : {this.state.resistance.name}</IonTitle> : <IonTitle>Loading...</IonTitle> }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCardContent>
                <IonList>
                <IonItem>
                    {/* <IonHeader>{this.state.resistance.activities}</IonHeader> */}
                    <IonLabel>
                    {this.state.resistance && (this.state.resistance.activities.activation.map((activationEx)=>{
                    return <p>{activationEx}</p>
                }))}
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                    {this.state.resistance && (this.state.resistance.activities.pyramid.map((pyramidEx)=>{
                    return <p>{pyramidEx}</p>
                }))}
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                    {this.state.resistance && (this.state.resistance.activities.supersets.map((suprsetEx)=>{
                    return <p>{suprsetEx}</p>
                }))}
                    </IonLabel>
                </IonItem>
                </IonList>
                </IonCardContent>
            </IonContent>
        </IonPage>
        );
    }
}

export default withIonLifeCycle(DailyExcercisePage);
