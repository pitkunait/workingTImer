import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-elements';

const categoryTemplate = {
    title: 'test1',
    time: 0,
    icon: null,
    timer: null,
};

const Categories = (props) => {
    const [selectedCategory, setSelectedCategory] = useState({
        ...categoryTemplate,
    });

    const startTimer = () => {
        selectedCategory.timer = setInterval(() => {
            selectedCategory.time += 1;
            setSelectedCategory({ ...selectedCategory });
        }, 1000);
        setSelectedCategory({ ...selectedCategory });
    };

    const stopTimer = () => {
        clearInterval(selectedCategory.timer);
        setSelectedCategory({ ...selectedCategory, timer: null });
    };

    const timeString = new Date(selectedCategory.time * 1000)
        .toISOString()
        .substr(11, 8);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedCategory.title}</Text>
            <View style={styles.timer}>
                <Text style={styles.timerText}>{timeString}</Text>
            </View>

            <View style={styles.buttons}>
                <Button
                    onPress={startTimer}
                    disabled={Boolean(selectedCategory.timer)}
                    containerStyle={styles.buttonContainerL}
                    title={'Start'}
                />
                <Button
                    disabled={!Boolean(selectedCategory.timer)}
                    onPress={stopTimer}
                    buttonStyle={styles.stopButton}
                    containerStyle={styles.buttonContainerR}
                    title={'Stop'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        alignSelf: 'center',
        color: '#16327a',
        fontWeight: 'bold',
        fontSize: 20,
    },
    timer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    timerText: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    buttons: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',
    },
    buttonContainerL: {
        flex: 1,
        marginRight: 5,
    },
    buttonContainerR: {
        flex: 1,
        marginLeft: 5,
    },
    stopButton: {
        backgroundColor: 'red',
    },
});

export default Categories;
