import {
  IonContent,
  IonHeader,
  IonPage,
  IonCheckbox,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "../style/home.css";

// import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Plugins } from '@capacitor/core';
import { Week } from "../Model";

const { Storage } = Plugins;

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

interface HomePageProps extends RouteComponentProps {
    weeks: Array<Week>
}

const Home: React.FC<HomePageProps> = props => {

    console.log('HOME');
    console.log(props);

  return (
    <IonPage>
      <IonHeader>On Track</IonHeader>
      <IonContent>
        {props.weeks.map((week)=> (
          <IonCard key={week.week}>
          <IonCardHeader>
            <IonButton onClick={() => props.history.push(`/weeks/${week.keyName}`)} className="weekBtn" color="secondary">{week.week}</IonButton>
          </IonCardHeader>
          <IonCardContent>
            <div className="traningForWeekContainer">
                <div className="checkBoxContainer">
                <IonCheckbox/>
                <IonCheckbox/>
                <IonCheckbox/> Resistance
                </div>
                <div className="checkBoxContainer">
                <IonCheckbox/>
                <IonCheckbox/>
                <IonCheckbox/> Cardio
                </div>
                <div className="checkBoxContainer">
                <IonCheckbox/>
                <IonCheckbox/>
                <IonCheckbox/> Recovery
                </div>
            </div>
          </IonCardContent>
        </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};
export default Home;