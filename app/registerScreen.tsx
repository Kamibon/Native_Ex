import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "@rneui/themed";
import { useRouter } from "expo-router";

interface FormType {
  [index: string]: any;
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function LoginScreen() {
  const [block, setBlock] = useState(false);
  const [formData, setFormData] = useState<FormType>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [invisible, setInvisible] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  function handleChange(text: string, name: string) {
    setFormData({ ...formData, [name]: text });
  }

  function handleSubmit() {
    Object.keys(formData).forEach((el) => {
      if ((formData[el] as string).length === 0) {
        setFormErrors({
          ...formErrors,
          [el]: `Errore nell'inserimento di ${el}`,
        });
      }

      /* if(el === 'password' ) {
        let regex = /[A-Za-z]+[0-9]+#/i;
        if(!regex.test(formData.password as string)){ setFormErrors({...formErrors, 
          password:`La password deve contenere un numero ed un carattere speciale`})
        
        }
                             } */
    });
    /*  Object.keys(formData).forEach(el=>{
        setFormErrors({...formErrors, [el]:''})
     }) */
  }

  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: '5%' }}>
        <Text style = {{fontSize: 32, fontWeight: 'bold'}}>FakeGram</Text>
        <View>
          <Input
            errorMessage={formErrors.name}
            onChangeText={(e) => handleChange(e, "name")}
            nativeID="name"
            value={formData.name}
            placeholder="Nome"
          />
          <Input
            errorMessage={formErrors.surname}
            onChangeText={(e) => handleChange(e, "surname")}
            nativeID="surname"
            value={formData.surname}
            placeholder="Cognome"
          />
          <Input
            errorMessage={formErrors.email}
            textContentType="emailAddress"
            onChangeText={(e) => handleChange(e, "email")}
            nativeID="email"
            value={formData.email}
            placeholder="Email"
          />
          <Input
            errorMessage={formErrors.password}
            secureTextEntry = {invisible}
            onChangeText={(e) => handleChange(e, "password")}
            nativeID="password"
            value={formData.password}
            placeholder="Password"
          />
          <Input
            errorMessage={formErrors.confirmPassword}
            secureTextEntry = {invisible}
            onChangeText={(e) => handleChange(e, "confirmPassword")}
            nativeID="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Conferma Password"
          />
          <Text style={{ color: "#dc2626" }}>
            {block ? "Errore nella compilazione del form" : ""}
          </Text>
        </View>

        <Button onPress={() => handleSubmit()}>
          Crea account
        </Button>
      </View>
    </SafeAreaView>
  );
}
