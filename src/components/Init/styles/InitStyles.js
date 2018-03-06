import {StyleSheet} from 'react-native';

export const initStyles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#1DBBB2'
    },
    bigText: {
        fontSize: 80,
        fontWeight: "700",
        color: '#F5D92F'
    },
    smallText: {
        fontSize: 20,
        color: '#F5D92F',
        textAlign: 'left'
    },
    viewLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewImage: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});