interface Exercise {
    name: string;
    keyName: string;
    completed: boolean;
    activities: Array<{
        activation: string;
        pyramid: string;
        supersets: string;
    }>
}

interface NonSpecifiedExercise {
    name: string;
    completed: boolean;
}

export interface Week {
    week: string;
    keyName: string;
    resistance: Array<Exercise>;
    cardio: NonSpecifiedExercise;
    stretch: NonSpecifiedExercise;
}

export const TRANING_WEEKS: Array<Week> = [
  {
    week: "Week 1",
    keyName: "week1",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: {
        name: "cardio",
        completed: false
    },
    stretch: {
        name: "stretch",
        completed: false
    }
  },
  {
    week: "Week2",
    keyName: "week2",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week3",
    keyName: "week3",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: 
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week4",
    keyName: "week4",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week5",
    keyName: "week5",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week6",
    keyName: "week6",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: 
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week7",
    keyName: "week7",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: 
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week8",
    keyName: "week8",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week9",
    keyName: "week9",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week10",
    keyName: "week10",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio:
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week11",
    keyName: "week11",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: 
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  },
  {
    week: "Week12",
    keyName: "week12",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: [
          {
            activation: "12x pushups",
            pyramid: "15/12/10/10 Chest Press",
            supersets: "12x chest fly"
          }
        ]
      }
    ],
    cardio: 
      {
        name: "cardio",
        completed: false
      },
    stretch: 
      {
        name: "stretch",
        completed: false
      }
  }
];
