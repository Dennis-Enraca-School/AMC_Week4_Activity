import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    title: 'Take Breakfast',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Take Bath',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasda',
    title: 'Go toothbrush',
  },
    
    {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasdasdasda',
    title: 'Start my honda click fully paid',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Prepare to school',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Go School',
  },
       {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Prepare for AMC Subject',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Attending AMC Class',
  },
    


  {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Eat Lunch',
  },
           {
    id: '58694a0f-3da1-471f-bd96-145571e29asdawdadawawdba',
    title: 'Prepare for AppDev Subject',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d3',
    title: 'Attending APPDEV Class',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29daa',
    title: 'Go Home',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29daaa',
    title: 'Go to work',
  },
      {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasdadasda',
    title: 'Project Alignment with team',
  },
  

    {
    id: '58694a0f-3da1-471f-bd96-145571e29ddasdaswdaba',
    title: 'Take a coffee break',
  },
      {
    id: '58694a0f-3da1-471f-bd96-145571e29dasdasdawaba',
    title: 'play valorant on my break',
  },

   {
    id: '58694a0f-3da1-471f-bd96-145571e29dasdawdasdawaba',
    title: 'Go to back work',
  },

    {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Finish task on work',
  },
 
    {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Research some react native codes',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571adwasdawe29daba',
    title: 'Eat Dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29asdadswdaba',
    title: 'Video call parents',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571asdawdawdasdasde29daba',
    title: 'Play mobile games',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e2ddadad9daba',
    title: 'Take night bath',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571asdasde29daba',
    title: 'Prepare Sleep',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145asdasd571e29daba',
    title: 'Go to sleep',
  },
];

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};


const COLORS = [
  '#FF5733',  // Red-Orange
  '#33FF57',  // Green
  '#3357FF',  // Blue
  '#FF33A1',  // Pink
  '#FFCD33',  // Yellow
  '#8E44AD',  // Purple
  '#3498DB',  // Light Blue
  '#F39C12',  // Golden Yellow
  '#D35400',  // Orange
  '#2ECC71',  // Emerald Green
  '#9B59B6',  // Amethyst Purple
  '#1ABC9C',  // Turquoise
  '#E74C3C',  // Red
  '#16A085',  // Teal
  '#34495E',  // Dark Blue
  '#F1C40F',  // Sunflower Yellow
  '#2C3E50',  // Dark Navy Blue
  '#E67E22',  // Carrot Orange
  '#7F8C8D',  // Grey
  '#95A5A6',  // Light Grey
  '#2980B9',  // Bright Blue
  '#C0392B',  // Strong Red
  '#16A085',  // Greenish Teal
  '#BDC3C7',  // Light Silver
  '#27AE60',  // Bright Green
  '#8E44AD'   // Purple
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;