import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("./assets/do-utilizador.png")}
        style={styles.logo}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Telefone, nome de usuário ou email"
          placeholderTextColor="#aaa"
          textAlign="center"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          textAlign="center"
        />

        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/contorno-da-seta-de-login.png")}
            style={styles.loginIcon}
          />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Esqueceu a senha?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  form: {
    width: "75%",
  },
  input: {
    backgroundColor: "#444",
    height: 60,
    padding: 10,
    borderRadius: 35,
    marginBottom: 17,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#D3D3D3",
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#D3D3D3",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
