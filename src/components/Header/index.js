import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
      <View style={styles.container}>
        
        <View style={styles.content}>

          <Text style={styles.username}>{name}</Text>

          <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
            <Feather name="user" size={27} color="#fff" />
          </TouchableOpacity>
          
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000FF",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",   
  },
  username: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
