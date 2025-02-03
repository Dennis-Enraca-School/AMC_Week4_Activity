import React from 'react';
import {Text, ScrollView} from 'react-native';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
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
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text> Monday Routine</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>


  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});




export default App;