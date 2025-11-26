import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

const quizQuestions = [
  {
    id: 1,
    question: "Cili është gjuha kryesore e përdorur për zhvillimin e aplikacioneve React Native?",
    options: ["Java", "Python", "JavaScript", "C#"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Cili është protokolli standard për komunikimin në internet?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Cila është njësia e matjes së tensionit elektrik?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Cili është planeti më i madh në sistemin diellor?",
    options: ["Toka", "Mërkuri", "Jupiter", "Mars"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Cili është sistemi operativ i zhvilluar nga Apple për iPhone?",
    options: ["Android", "iOS", "Windows", "Linux"],
    correctAnswer: 1
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;
  const question = quizQuestions[currentQuestion];

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (currentQuestion + 1) / quizQuestions.length,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentQuestion]);

  const handleAnswer = (selectedIndex) => {
    if (isAnswering) return;

    setSelectedOption(selectedIndex);
    setIsAnswering(true);

    const isCorrect = selectedIndex === question.correctAnswer;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setCurrentQuestion(quizQuestions.length);
      }
      setSelectedOption(null);
      setIsAnswering(false);
    }, 800);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  if (currentQuestion >= quizQuestions.length) {
    const percentage = (score * 100) / quizQuestions.length;

    return (
      <View style={styles.gradientBackground}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Rezultati Yt</Text>
          <Text style={styles.scoreText}>
            {score} / {quizQuestions.length}
          </Text>
          <Text style={styles.percentageText}>
            {percentage.toFixed(0)}%
          </Text>
        </View>

        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartText}>Rifillo Quiz</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.gradientBackground}>
      <Text style={styles.title}>Quiz Edukativ</Text>
      <Text style={styles.progressText}>
        Pyetja {currentQuestion + 1} nga {quizQuestions.length}
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressBarBackground}>
        <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => {
          let backgroundColor = '#7e57c2';
          if (selectedOption !== null) {
            if (index === question.correctAnswer) backgroundColor = '#4CAF50';
            else if (index === selectedOption) backgroundColor = '#E53935';
            else backgroundColor = '#9c9c9c';
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.optionButton, { backgroundColor }]}
              onPress={() => handleAnswer(index)}
              disabled={isAnswering}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    backgroundColor: '#dbe6f6',
    backgroundBlendMode: 'overlay',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 25,
    color: '#3c3a73',
    letterSpacing: 1,
  },
  progressText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a4a68',
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 10,
    width: '90%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 25,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4a148c',
    borderRadius: 5,
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#7a7a7a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
  },
  questionText: {
    fontSize: 20,
    color: '#2c3e50',
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  optionButton: {
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 12,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#5e35b1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#8e24aa',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 30,
  },
  resultLabel: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4a148c',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#311b92',
    marginBottom: 8,
  },
  percentageText: {
    fontSize: 18,
    color: '#7e57c2',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  restartButton: {
    backgroundColor: '#4a148c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#6a1b9a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  restartText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
