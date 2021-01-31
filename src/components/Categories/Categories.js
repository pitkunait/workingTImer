//@flow

import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    Button,
    ButtonGroup,
    Icon,
    Input,
    Overlay,
} from 'react-native-elements';

const categoryTemplate = {
    title: '',
    time: 0,
    icon: null,
};

// this will later come from redux
const mockCategories = [
    {
        title: 'Time With Nikita',
        time: 0,
        icon: null,
    },
];

const BUTTONS = [
    'rowing',
    'thumb-up',
    'sleep',
    'coffee-maker',
    'run',
    'sleep',
    'coffee-maker',
];

const COLORS = ['red', 'blue', 'green', 'yellow'];

const Categories = () => {
    const [newCategory, setNewCategory] = useState({ ...categoryTemplate });
    const [categories, setCategories] = useState(mockCategories);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [editCategory, setEditCategory] = useState();

    const addCategory = () => {
        setCategories([...categories, newCategory]);
        setNewCategory({ ...categoryTemplate });
    };

    const removeCategory = (index) => {
        categories.splice(index, 1);
        setCategories([...categories]);
    };

    const onNewCategoryChange = (key) => (value) => {
        setNewCategory({ ...newCategory, [key]: value });
    };

    const changeIcon = (index) => {
        categories[editCategory].icon =
            BUTTONS[index] === categories[editCategory].icon
                ? null
                : BUTTONS[index];
        setCategories([...categories]);
    };

    const toggleOverlay = (index) => {
        setEditCategory(index);
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <>
            <Overlay
                overlayStyle={styles.overlay}
                isVisible={isOverlayOpen}
                fullScreen
                onBackdropPress={() => setIsOverlayOpen(false)}>
                <ButtonGroup
                    buttons={BUTTONS.map((i) => (
                        <Icon name={i} />
                    ))}
                    onPress={changeIcon}
                />
            </Overlay>
            <View style={styles.container}>
                <ScrollView>
                    {categories.map((i, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.category}
                            onLongPress={() => toggleOverlay(index)}>
                            <Icon name={i.icon} />
                            <Text>{i.title}</Text>
                            <Text>
                                {new Date(i.time * 10)
                                    .toISOString()
                                    .substr(11, 11)}
                            </Text>
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
        </>
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
        paddingBottom: 10,
    },
    inputIcon: {},
    overlay: { height: '50%', width: '90%' },
});

export default Categories;
