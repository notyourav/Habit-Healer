import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { getAuth } from '../firebase/firebaseConfig';
import { colors } from '../colors/colors';
import NotificationsFeed from './NotificationsFeed';
import SubpageHeader from './SubpageHeader';
import FriendList from './FriendsList';

const auth = getAuth();

const ViewFriends = ({ setCurrentScreen }) => {
    const theme = useColorScheme();

    const backgroundColor = theme === 'light' ? colors.lightBackgroundColor : colors.darkBackgroundColor;

    const dynamicStyles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 10,
            width: Dimensions.get('window').width,
            backgroundColor: backgroundColor,
        },
        backText: {
            color: colors.darkTextColor, // Adjust color as necessary
            paddingRight: 10, // Adjust padding as necessary
        },
        topRightButtonText: {
            color: colors.headerColor,
        },
    });

    return (
        <View style={dynamicStyles.container}>
            <SubpageHeader
                // Adjust title and back button based on your header component's capabilities
                title={"Your Friends"}
                backButtonFunction={() => { setCurrentScreen("Friends"); }}
                rightSideButtonArray={
                    [
                        <TouchableOpacity onPress={() => { setCurrentScreen("AddFriends"); }}>
                            <Text style={dynamicStyles.topRightButtonText}>Add Friends</Text>
                        </TouchableOpacity>,
                    ]
                }
            />
            <FriendList />
        </View>
    );
};

export default ViewFriends;
