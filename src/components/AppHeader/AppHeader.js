import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props: { title: string }) => {
    return (
        <Header
            // backgroundColor={'#444444'}
            centerComponent={{
                text: props.title,
                style: { color: '#fff' },
            }}
        />
    );
};

export default AppHeader;
