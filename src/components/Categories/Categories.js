//@flow

import React, { useEffect, useState } from 'react';
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
import connect from 'react-redux/lib/connect/connect';
import {
    addCategory,
    removeCategory,
    restoreObjects,
    selectCategory,
    tick,
} from '../../store/actions/TimerActions';
import Category from '../../data/Category';
import BackgroundTimer from 'react-native-background-timer';

const BUTTONS = ['rowing', 'thumb-up'];
const COLORS = ['red', 'blue', 'green', 'yellow'];

const Categories = (props) => {
    const [newCategory, setNewCategory] = useState(new Category());
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [editCategory, setEditCategory] = useState();

    useEffect(() => {
        props.restoreObjects();
        BackgroundTimer.stop();
        const interval = setInterval(() => {
            props.tick();
        }, 1000);
        return () => {
            BackgroundTimer.start();
            clearInterval(interval);
        };
    }, []);

    const addCategory = () => {
        props.addCategory(newCategory);
        setNewCategory(new Category());
    };

    const onNewCategoryChange = (key) => (value) => {
        newCategory[key] = value;
        setNewCategory(Category.fromObject(newCategory));
    };

    const changeIcon = (index) => {
        props.categories[editCategory].icon =
            BUTTONS[index] === props.categories[editCategory].icon
                ? null
                : BUTTONS[index];
    };

    const toggleOverlay = (index) => {
        setEditCategory(index);
        setIsOverlayOpen(!isOverlayOpen);
    };

    const selectCategory = (index) => {
        props.selectCategory(index);
        props.navigation.navigate('Timer');
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
                    {props.categories.map((i, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.category}
                            onPress={() => selectCategory(index)}
                            onLongPress={() => toggleOverlay(index)}>
                            <Icon name={i.icon} />
                            <Text>{i.title}</Text>
                            <Text>
                                {new Date(i.time * 1000)
                                    .toISOString()
                                    .substr(11, 8)}
                            </Text>
                            <Icon
                                name="close"
                                onPress={() => props.removeCategory(index)}
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

const mapStateToProps = (state) => {
    return {
        categories: state.timer.categories,
    };
};

const mapDispatchToProps = {
    addCategory,
    removeCategory,
    selectCategory,
    tick,
    restoreObjects,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Categories);
