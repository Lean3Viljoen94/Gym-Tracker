import {
  IonContent,
  IonHeader,
  IonPage,
  IonCheckbox,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Plugins } from "@capacitor/core";

import { Week } from "../Model";
import "../style/home.css";

// const { Storage } = Plugins;

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

interface HomePageProps extends RouteComponentProps {
  weeks: Array<Week>;
  markCompleted: (a: string, b: string) => void;
}

// Props derived from main App.tsx component 

class Home extends React.Component<HomePageProps> {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  render() {
    return (
      <IonPage>
        <IonHeader>On Track</IonHeader>
        <IonContent>
          {this.props.weeks.map(week => (
            <IonCard key={week.week}>
              <IonCardHeader>
                <IonButton
                  onClick={() =>
                    this.props.history.push(`/weeks/${week.keyName}`)
                  }
                  className="weekBtn"
                  color="secondary"
                >
                  {week.week}
                </IonButton>
              </IonCardHeader>
              <IonCardContent>
                <div className="traningForWeekContainer">
                  <div className="checkBoxContainer">
                    {week.resistance.map(resistanceEx => (
                      <IonCheckbox
                        checked={resistanceEx.completed}
                        key={resistanceEx.keyName}
                        onClick={() =>
                          this.props.markCompleted(
                            week.keyName,
                            resistanceEx.keyName
                          )
                        }
                      />
                    ))}
                    Resistance
                  </div>

                  <div className="checkBoxContainer">
                    <IonCheckbox />
                    <IonCheckbox />
                    <IonCheckbox /> Cardio
                  </div>
                  <div className="checkBoxContainer">
                    <IonCheckbox />
                    <IonCheckbox />
                    <IonCheckbox /> Recovery
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
  }
}
export default Home;
