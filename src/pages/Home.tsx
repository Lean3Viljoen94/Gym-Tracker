import {
  IonContent,
  IonHeader,
  IonPage,
  IonCheckbox,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "../style/home.css";
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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

//     constructor(private nativeStorage: NativeStorage) { }

// this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
//   .then(
//     () => console.log('Stored item!'),
//     error => console.error('Error storing item', error)
//   );

// this.nativeStorage.getItem('myitem')
//   .then(
//     data => console.log(data),
//     error => console.error(error)
//   );

  return (
    <IonPage>
      <IonHeader>On Track</IonHeader>
      <IonContent>
        {form.map(({val, isChecked, id})=> (
          <IonCard key={id}>
          <IonCardHeader>
            <IonButton onClick={() => props.history.push(`/weeks/${id}`)} class="weekBtn" color="secondary">{val}</IonButton>
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


// class name {
//     constructor(parameters) {
        
//     }
// }