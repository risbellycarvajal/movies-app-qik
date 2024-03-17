import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Divider = () => {
    return <View testID="divider" style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        width: width - 40,
        height: 1,
        backgroundColor: 'gray',
        alignSelf: 'center',
        marginVertical: 20
    }
});

export default Divider;
