import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import { Button, Icon, Input } from 'react-native-elements';
import { addUser } from '../../store/reducers/UserReducer';

const Users = (props) => {
    const [newUser, setNewUser] = useState({ name: '', totalTime: 0 });
    const changeUserName = (value) => {
        setNewUser({ ...newUser, name: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ScrollView style={styles.category}>
                    {props.users.map((x, index) => (
                        <Text style={styles.category} key={index}>
                            {x.name}
                        </Text>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.inputBox}>
                <Input
                    placeholder="INPUT"
                    value={newUser.name}
                    onChangeText={changeUserName}
                />
            </View>
            <Button
                title="SAFE"
                onPress={() => props.addUser(newUser)}
                icon={<Icon name="thumb-up" color="white" />}
                iconRight
            />
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        // alignItems: 'center',
        borderColor: '#aaaaaa',
        // justifyContent: 'space-between',
    },
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    inputBox: {
        // paddingBottom: 10,
        // justifyContent: 'space-between',
        // flex: 1,
    },
    inputIcon: {},
    overlay: { height: '50%', width: '90%' },
});

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};

const mapDispatchToProps = {
    addUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Users);
