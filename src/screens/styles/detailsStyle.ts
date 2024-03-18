import { StyleSheet } from 'react-native';

export const detailsStyles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noDetailsText: {
        fontSize: 18,
        color: 'grey'
    },
    contentContainer: {
        padding: 20
    },
    poster: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    posterContainer: {
        width: '100%',
        height: 430,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 8,
        width: '90%',
        color: 'black'
    },
    releaseDate: {
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom: 12
    },
    overview: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        color: 'black'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        color: 'black'
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    pill: {
        marginRight: 10,
        fontSize: 16,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 6,
        color: 'black'
    },
    actorContainer: {
        marginRight: 16,
        width: 120,
        alignItems: 'center'
    },
    actorImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 6,
        borderWidth: 3,
        borderColor: 'grey'
    },
    actorName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    characterName: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black'
    },
    titleContainer: {
        marginBottom: 2
    },
    recommmendationsContainer: {
        padding: 10
    },
    rateContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rateText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    viewRow: {
        flexDirection: 'row'
    },
    textCentered: {
        textAlign: 'center'
    }
});
