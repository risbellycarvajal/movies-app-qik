import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 360,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16,
        height: 40,
        color: 'black'
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginTop: 4
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 4,
        paddingRight: 3
    }
});
