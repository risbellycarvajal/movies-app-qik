import { StyleSheet } from 'react-native';

export const moviesStyles = StyleSheet.create({
    flatList: {
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    }
});
