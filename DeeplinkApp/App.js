import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View style={styles.Container}>
            <StatusBar hidden translucent />
            <Text style={styles.TextStyle}>Deeplink Demo</Text>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        fontSize: 30,
        color: '#000',
        fontWeight: '700',
    }
})