import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-elements';
import {
    startSelectedTimer,
    stopSelectedTimer,
} from '../../store/reducers/TimerReducer';
import connect from 'react-redux/lib/connect/connect';

const Timer = (props) => {
    const getTime = () =>
        new Date(props.categories[props.selectedCategory].time * 1000)
            .toISOString()
            .substr(11, 8);

    return (
        <View style={styles.container}>
            {props.categories[props.selectedCategory] ? (
                <>
                    <Text style={styles.title}>
                        {props.categories[props.selectedCategory].title}
                    </Text>
                    <View style={styles.timer}>
                        <Text style={styles.timerText}>{getTime()}</Text>
                    </View>

                    <View style={styles.buttons}>
                        <Button
                            onPress={() => props.startSelectedTimer()}
                            disabled={Boolean(
                                props.categories[props.selectedCategory].timer,
                            )}
                            containerStyle={styles.buttonContainerL}
                            title={'Start'}
                        />
                        <Button
                            disabled={
                                !Boolean(
                                    props.categories[props.selectedCategory]
                                        .timer,
                                )
                            }
                            onPress={() => props.stopSelectedTimer()}
                            buttonStyle={styles.stopButton}
                            containerStyle={styles.buttonContainerR}
                            title={'Stop'}
                        />
                    </View>
                </>
            ) : (
                <Text>Select category</Text>
            )}
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

const mapStateToProps = (state) => {
    return {
        categories: state.timer.categories,
        selectedCategory: state.timer.selectedCategory,
    };
};

const mapDispatchToProps = {
    startSelectedTimer,
    stopSelectedTimer,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Timer);
