import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'
function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItems}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button,
                pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>

                </View>
            </Pressable>
        </View>

    )

}

export default CategoryGridTile;
const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },

    buttonPressed: {
        opacity: 0.5
    },

    button: {
        flex: 1

    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }


})