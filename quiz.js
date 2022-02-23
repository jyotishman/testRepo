import {View, Text, TouchableOpacity, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';

var quizData = [
  {
    id: 'q1',
    title:
      'Which of these React native components will be used to display the name=”wishtreetech”?',
    options: [
      {
        id: '1a',
        name: '<View>',
      },
      {
        id: '1b',
        name: '<Text>',
      },
      {
        id: '1c',
        name: '<span>',
      },
      {
        id: '1d',
        name: '<p>',
      },
    ],
    correctAnswer: '1b',
  },
  {
    id: 'q2',
    title:
      'Which of the following components is the optimized way to show a long list of data?',
    options: [
      {
        id: '2a',
        name: '<Scrollview />',
      },
      {
        id: '2b',
        name: '<View>',
      },
      {
        id: '2c',
        name: '<Flatlist>',
      },
      {
        id: '2d',
        name: '<Text>',
      },
    ],
    correctAnswer: '2c',
  },
  {
    id: 'q3',
    title: 'How do you style your React Native component?',
    options: [
      {
        id: '3a',
        name: 'Stylesheet.create',
      },
      {
        id: '3b',
        name: 'Stylesheet.css',
      },
      {
        id: '3c',
        name: 'Stylesheet.CSS',
      },
      {
        id: '3d',
        name: 'Stylesheet.Create',
      },
    ],
    correctAnswer: '3a',
  },
  {
    id: 'q4',
    title:
      'Which of the following is the correct plugin to navigate from one screen to another?',
    options: [
      {
        id: '4a',
        name: 'React Hooks',
      },
      {
        id: '4b',
        name: 'React Navigation',
      },
      {
        id: '4c',
        name: 'React Router',
      },
      {
        id: '4d',
        name: '<Screen />',
      },
    ],
    correctAnswer: '4b',
  },
  {
    id: 'q5',
    title:
      'Which of the following is the correct method(hook) to make an api call on page load?',
    options: [
      {
        id: '5a',
        name: 'useState',
      },
      {
        id: '5b',
        name: 'useEffect',
      },
      {
        id: '5c',
        name: 'useReducer',
      },
      {
        id: '5d',
        name: 'useSelector',
      },
    ],
    correctAnswer: '5b',
  },
];

export default function QuizHomepage() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [hasSubmitted, setSubmit] = useState(false);

  const handleQuizSelection = (sid, qid) => {
    let newState = {...quizAnswers};
    newState[qid] = {
      value: sid,
    };
    console.log(newState);
    setQuizAnswers(newState);
  };

  const handeResult = () => {
    if (hasSubmitted) {
      setSubmit(false);
      setQuizAnswers({});
    } else {
      if(Object.keys(quizAnswers).length < 2) {
        alert("Please select all answers");
        return;
      }
      var result = 0;
      quizData.map(quiz => {
        if (quizAnswers[quiz.id]?.value === quiz?.correctAnswer) {
          result = result + 1;
        }
      });
      setSubmit(true);
      alert(`Your score is: ${result} / ${quizData.length}`);
    }
  };

  return (
    <ScrollView style={{padding: 20, paddingVertical: 0}}>
      <Text style={{marginBottom: 10}}>MCQ quiz </Text>
      <Text style={{marginBottom: 10}}>
        Total Questions: {quizData?.length}{' '}
      </Text>

      {quizData?.map((quiz, index) => {
        return (
          <View>
            <Text style={{marginBottom: 10}}>
              {index + 1}. {quiz?.title}
            </Text>
            <View style={{marginLeft: 30, marginBottom: 30}}>
              {quiz?.options.map((option, idx) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleQuizSelection(option.id, quiz.id)}>
                    <Text
                      style={[
                        {padding: 5},
                        hasSubmitted
                          ? quizAnswers[quiz.id]?.value === option.id
                            ? {
                                backgroundColor:
                                  quizAnswers[quiz.id]?.value ===
                                  quiz.correctAnswer
                                    ? 'green'
                                    : 'red',
                              }
                            : null
                          : quizAnswers[quiz.id]?.value === option.id
                          ? {backgroundColor: '#ddd'}
                          : null,
                      ]}>
                      {idx + 1}. {option?.name}
                      {}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
      <Button
        title={hasSubmitted ? 'reset' : 'submit'}
        onPress={handeResult}></Button>
    </ScrollView>
  );
}
