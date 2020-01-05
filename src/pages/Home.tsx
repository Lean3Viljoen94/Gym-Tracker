import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonBackButton
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "../style/home.css";

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const form = [
  { val: "Week 1", isChecked: false, id: 'week1' },
  { val: "Week 2", isChecked: false, id: 'week2' },
  { val: "Week 3", isChecked: false, id: 'week3' },
  { val: "Week 4", isChecked: false, id: 'week4' },
  { val: "Week 5", isChecked: false, id: 'week5' },
  { val: "Week 6", isChecked: false, id: 'week6' },
  { val: "Week 7", isChecked: false, id: 'week7' },
  { val: "Week 8", isChecked: false, id: 'week8' },
  { val: "Week 9", isChecked: false, id: 'week9' },
  { val: "Week 10", isChecked: false, id: 'week10' },
  { val: "Week 11", isChecked: false, id: 'week11' },
  { val: "Week 12", isChecked: false, id: 'week12' }
];

const Home: React.FC<RouteComponentProps> = props => {

  return (
    <IonPage>
      <IonHeader>Gym Tracker</IonHeader>
      <IonContent>
        {form.map(({val, isChecked, id})=> (
          <IonCard key={id}>
          <IonCardHeader>
            <IonButton onClick={() => props.history.push(`/weeks/${id}`)}>{val}</IonButton>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/> Resistance
            </IonCardSubtitle>
            <IonCardSubtitle>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/> Cardio
            </IonCardSubtitle>
            <IonCardSubtitle>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/>
              <IonCheckbox checked={isChecked}/> Recovery
            </IonCardSubtitle>
            </IonCardContent>
        </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};
export default Home;


