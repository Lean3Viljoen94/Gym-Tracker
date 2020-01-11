interface Exercise {
    name: string;
    keyName: string;
    completed: boolean;
    activities: {
        activation: Array<string>;
        pyramid: Array<string>;
        supersets: Array<string>;
    }
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
        activities: {
            activation: ["ACTIVATION - 3 sets each","12x Incline pushups", "20x Jumping Jack", "15x Chest Fly", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Chest Press", "12/10/10 Machine Chest Press", "12/10/10 Tricep Push Down"],
            supersets: ["SUPERSETS - 3 sets each","12x Chest Fly", "12x Skull Crusher", "12x Pushup", "12x Tricep Dip" ]
        }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","20x Reverse Lunge", "40x Mountain Climbers", "12x Sumo Squats", "20x Knee-ups"],
            pyramid: ["PYRAMID","15/12/10/10 Sumo Leg Press", "12/10/10 Sit Squats", "12/10/10 Calf Raises"],
            supersets: ["SUPERSETS - 3 sets each","15x Bent-leg Raise", "15x Toe-taps", "20x Single-arm Jacknife", "30sec Plank"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","15x Front-lat Pull", "20x Jumping Jacks", "15x Bent-over Fly", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Seate Row", "12/10/10 Lat Pulldown", "12/10/10 Arnold Press"],
            supersets: ["SUPERSETS - 3 sets each", "12x Face-lat pull", "12x Side-raise", "12x Bent-over Reverse Fly", "12x Front-raise"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","15x Incline Pushups", "25x Jumping Jacks", "15x Straight-leg Raises", "45x Mountain Climbers"],
            pyramid: ["PYRAMID","15/12/10/10 Tricep Extention", "12/10/10 Crunces", "12/10/10 Tricep Push-down"],
            supersets: ["SUPERSETS - 3 sets each", "10x Bicep-curl", "10x Machine Bicep Curl (overhand)", "12x Bent-leg Sit-up", "15x Inchworm"]
          }
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
    week: "Week 2",
    keyName: "week2",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities:
          {
            activation : ["ACTIVATION - 3 sets each","12x Tricep pushups", "20x Jumping Jacks", "15x Chest Fly", "15x Inchworm"],
            pyramid: ["PYRAMID","15/12/10/10 Chest Press", "12/10/10 Chest Fly", "12/10/10 Tricep Extention"],
            supersets: ["SUPERSETS - 3 sets each", "12x chest fly", "12x Tricep Dip", "10x Negative Push-up", "12x Tricep Extention"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x Squats", "20x Jumping Jacks", "15x Leg Extentions", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Close Leg Press", "12/10/10 Squats", "12/10/10 Crunches"],
            supersets: ["SUPERSETS - 3 sets each", "12x Squat & press", "20x Knee-up", "12x Bent-knee Sit-ups", "30x Flutter-kicks"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","20x Single-arm reverse-fly", "10x Burpee", "15x Front-lat Pull", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Lat Pull-down", "24/20/20 Single-arm Reverse fly", "12/10/10 Side raise"],
            supersets: ["SUPERSETS - 3 sets each", "12x Bent-over Reverse-fly", "12x Bicep Curl", "20x Single Arm row", "12x Negative bicep-curl"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","15x pushups", "10x Burpee", "15x Bent-leg Raise", "40x Mountain-climber"],
            pyramid: ["PYRAMID","15/12/10/10 Machine Bicep-curl (underhand)", "12/10/10 Crunch", "12/10/10 Bicep Curl"],
            supersets: ["SUPERSETS - 3 sets each", "10x Tricep Dip", "10x Tricep Extention", "20x Bent-leg Raise", "40x Mountain Climber"]
          }
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
    week: "Week 3",
    keyName: "week3",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x Incline pushups", "20x Jumping Jacks", "15x Chest Fly", "40x Mountain Climbers"],
            pyramid: ["PYRAMID","15/12/10/10 Chest Press", "12/10/10 Machine Chest Press", "12/10/10 Tricep Push-down"],
            supersets: ["SUPERSETS - 3 sets each","12x Chest Fly", "12x Skull Crusher", "12x Pushup", "12x Tricep Dip"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","20x Reverse Lunge", "40x Mountain Climber", "12x Sumo Squat", "20x Knee-up"],
            pyramid: ["PYRAMID","15/12/10/10 Sumo Leg Press", "12/10/10 Sit Squat", "12/10/10 Calf Raise"],
            supersets: ["SUPERSETS - 3 sets each","15x Bent-leg Raise", "15x Toe-tap", "20x Single-arm Jacknife", "30sec Plank"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","15x Front-lat Pull", "20x Jumping Jack", "15x Bent-over Reverse Fly","40x Mountain Climbers"],
            pyramid: ["PYRAMID","15/12/10/10 Seated Row", "12/10/10 Lat pulldown", "12/10/10 Arnold Press"],
            supersets: ["SUPERSETS - 3 sets each","12x Face-lat Pull", "12x Side Raise", "12x Bent-over reverse-fly", "12x Front-raise"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x Incline pushups", "25x Jumping Jacks", "15x Straight-lg Raise", "45x Mountain climbers"],
            pyramid: ["PYRAMID","15/12/10/10 Tricep Extention", "12/10/10 Crunch ", "12/10/10 Tricep push down"],
            supersets: ["SUPERSETS - 3 sets each","10x Bicep-curl", "10x Machine bicep-curl", "12x Bent-leg Sit-up", "15x Inchworm"]
          }
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
    week: "Week 4",
    keyName: "week4",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x Tricep push-up", "20x Jumping Jacks", "15x Chest Fly", "15x Inchworm"],
            pyramid: ["PYRAMID","15/12/10/10 Chest Press", "12/10/10 Chest Fly", "12/10/10 Tricep extention"],
            supersets: ["SUPERSETS - 3 sets each","12x Chest Fly", "12x Tricep Dip", "10x Negative push-up", "12x Tricep Extention"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x Squats", "20x Jumping Jacks", "15x Leg Extention", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Close Leg Press", "12/10/10 Squat", "12/10/10 Cunch"],
            supersets: ["SUPERSETS - 3 sets each","12x Squat & Press", "20x Knee-up", "12x Bent-knee Sit-ups", "30x Flutter Kicks"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","20x Single-arm Reverse Fly", "10x Burpee", "15x Front-lat Pull", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Lat Pull-down", "24/20/20 Single-arm Reverse Fly", "12/10/10 Side Raise"],
            supersets: ["SUPERSETS - 3 sets each","12x Bent-over Reverse Fly", "12x Bicep Curl", "20x Single-arm Row", "12x Negative Bicep Curl"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups", "10x Burpee", "15x Bent-leg Raise", "40x Mountain Climber"],
            pyramid: ["PYRAMID","15/12/10/10 Machine Bicep Curl (underhand)", "12/10/10 Crunch", "12/10/10 Bicep Curl"],
            supersets: ["SUPERSETS - 3 sets each","10x Tricep Dip", "10x Tricep Extention", "20x Bent-leg raise", "40x Mountain climbers"]
          }
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
    week: "Week 5",
    keyName: "week5",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 6",
    keyName: "week6",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 7",
    keyName: "week7",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 8",
    keyName: "week8",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities:
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 9",
    keyName: "week9",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 10",
    keyName: "week10",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 11",
    keyName: "week11",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
    week: "Week 12",
    keyName: "week12",
    resistance: [
      {
        name: "Chest and Triceps",
        keyName: 'chest_triceps',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Legs and Abs",
        keyName: 'legs_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Back and Shoulders",
        keyName: 'back_shoulders',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
      },
      {
        name: "Arms and Abs",
        keyName: 'arms_abs',
        completed: false,
        activities: 
          {
            activation: ["ACTIVATION - 3 sets each","12x pushups"],
            pyramid: ["15/12/10/10 Chest Press"],
            supersets: ["12x chest fly"]
          }
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
