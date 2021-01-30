import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { Card, Input, Button, ButtonGroup, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppHeader from '../AppHeader/AppHeader';

import { Overlay } from 'react-native-elements';

const Categories = () => {
  const [newCategory, setNewCategory] = useState({
    title: '',
    icon: null,
  });

  const [categories, setCategories] = useState([
    {
      title: 'Title1',
      icon: null,
    },
  ]);

  const addCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory({ title: '' });
  };

  const removeCategory = (index) => {
    categories.splice(index, 1);
    setCategories([...categories]);
  };

  const onNewCategoryChange = (key) => (value) => {
    setNewCategory({ ...newCategory, [key]: value });
  };

  const changeIcon = (index) => {
    categories[index].icon = categories[index].icon ? null : 'thumb-up';
    setCategories([...categories]);
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const buttons = ['walk', 'run', 'sleep', 'coffee-maker', 'run', 'sleep', 'coffee-maker'];
  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppHeader />
      <View>
        <Overlay
          overlayStyle={styles.overlay}
          // isVisible={visible}
          isVisible={true}
          fullScreen
          onBackdropPress={toggleOverlay}>
          <ButtonGroup
            buttons={buttons}
            icon={<Icon name="thumb-up" color="red" />}
          />
        </Overlay>
      </View>
      <View style={styles.container}>
        <ScrollView>
          {categories.map((i, index) => (
            <TouchableOpacity
              key={index}
              style={styles.category}
              // onLongPress={() => changeIcon(index)}>
              onLongPress={toggleOverlay}>
              <Icon name={i.icon} />
              <Text>{i.title}</Text>
              <Icon
                name="close"
                onPress={() => removeCategory(index)}
                color="#f50"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View>
          <View style={styles.inputBox}>
            <Input
              placeholder="INPUT"
              value={newCategory.title}
              onChangeText={onNewCategoryChange('title')}
            />
          </View>
          <Button
            title="SAFE"
            onPress={addCategory}
            icon={<Icon name="thumb-up" color="white" />}
            iconRight
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#aaaaaa',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
  inputIcon: {},
  overlay: { height: '50%', width: '90%' },
});

export default Categories;
