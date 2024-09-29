import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

function AlbumCards(){
    return(
        <View>
            <Text style={styles.headerText}> Album Cards </Text>
            <View style={styles.container}>
                {/* ASAKE */}
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: 'https://www.musicinafrica.net/sites/default/files/images/article/202306/asake-502_0.jpg'
                    }}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Work of Art</Text>
                        <Text style={styles.cardArtist}>Artist: Asake</Text>
                        <Text style={styles.cardDesc}>Description: The 14-track Work Of Art showcases Asake's winning formula of fusing traditional and contemporary African music into something equally unique and celebratory.</Text>
                        <View style={styles.cardData}>
                            <Text style={styles.cardGenre}>Genre: Afrobeat</Text>
                            <Text style={styles.cardYear}>Year: 2021</Text>
                        </View>
                    </View>
                </View>

                {/* KIZZ DANIEL */}
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: 'https://www.bellanaija.com/wp-content/uploads/2023/07/D33A17C0-8340-4072-B5ED-19671E5D63ED.jpeg'
                    }}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Maverick</Text>
                        <Text style={styles.cardArtist}>Artist: Kizz Daniel</Text>
                        <Text style={styles.cardDesc}>Description: The 20-track album features previously released smash singles – Cough (ODO), Buga Ft. Tekno and Rich Till I Die (RTID).</Text>
                        <View style={styles.cardData}>
                            <Text style={styles.cardGenre}>Genre: Afrobeat</Text>
                            <Text style={styles.cardYear}>Year: 2024</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
    },
    card: {
        backgroundColor: '#ffffff',
        width: 360,
        height: 360,
        borderRadius: 10,
        marginBottom: 20,
    },
    cardImage: {
        width: 360,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 2,
    },
    cardArtist: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'medium',
        marginBottom: 5,
    },
    cardDesc: {
        color: '#000000',
        marginBottom: 5,
    },
    cardData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 5,
    },
    cardYear: {
        color: '#000000',
    },
    cardGenre: {
        color: '#000000',
    },

});

export default AlbumCards;
