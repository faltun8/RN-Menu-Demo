import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import MyBanner from './componenets/MyBanner';
import MyButton from './componenets/MyButton';

const food_data = [
    {
        id: 0,
        title: "Soups",
        desc: "Nisi esse adipisicing qui eiusmod.",
        color: "#f8bbd0",
        isActive: true,
    },
    {
        id: 1,
        title: "Meals",
        desc: "Nisi esse adipisicing qui eiusmod.",
        color: "#c5cae9",
        isActive: false,
    },
    {
        id: 2,
        title: "Salads",
        desc: "Nisi esse adipisicing qui eiusmod.",
        color: "#b3e5fc",
        isActive: true,
    },
    {
        id: 3,
        title: "Deserts",
        desc: "Nisi esse adipisicing qui eiusmod.",
        color: "#f0f4c3",
        isActive: true,
    },
    {
        id: 4,
        title: "Drinks",
        desc: "Nisi esse adipisicing qui eiusmod.",
        color: "#ffccbc",
        isActive: false,
    },
]

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
          {
              food_data.map(food => {
                  return (<MyBanner 
                  title={food.title}
                  desc={food.desc}
                  color={food.color}
                  isActive={food.isActive}                 
                  />
                  );
              })
          }

          <MyButton buttonTitle="REFRESH"></MyButton>
      </View>
    </SafeAreaView>
  );
};

export default App;
