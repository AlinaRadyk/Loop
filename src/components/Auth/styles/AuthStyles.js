import {StyleSheet} from 'react-native';

export const auth = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: '#1DBBB2'
    },
    viewImage: {
        flex: 0.7
    },
    viewLogoAndText: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    viewLogoAndTextSecond: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bigText: {
        fontSize: 80,
        fontWeight: "700",
        color: '#F5D92F'
    },
    viewText: {
        width: '50%',
        marginTop: '5%'
    },
    whiteText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    buttonNext: {
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#BADC5F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    viewRegisterForm: {
        flex:1,
        backgroundColor: '#1DBBB2',
        justifyContent: 'center',
        padding: 20
    },
    containerInput: {
        marginTop: 10
    },
});