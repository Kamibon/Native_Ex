import { View, Text } from "react-native";
import React, { useState } from "react";

import { Button, Input } from "@rneui/themed";
import { useRouter } from "expo-router";

interface formType {
  [index: string]: any;
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function LoginScreen() {
  const [block, setBlock] = useState(true);
  const [formData, setFormData] = useState<formType>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      console.log(el);
      if ((formData[el] as string).length === 0) {
        setFormErrors({
          ...formErrors,
          [el]: `Errore nell'inserimento di ${el}`,
        });
        console.log(el);
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
    <View>
      <View className=" flex flex-col p-[10%] ">
        <Text className=" text-4xl font-bold">FakeGram</Text>
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
            secureTextEntry
            onChangeText={(e) => handleChange(e, "password")}
            nativeID="password"
            value={formData.password}
            placeholder="Password"
          />
          <Input
            errorMessage={formErrors.confirmPassword}
            secureTextEntry
            onChangeText={(e) => handleChange(e, "confirmPassword")}
            nativeID="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Conferma Password"
          />
        </View>

        <Button onPress={() => handleSubmit()}> Crea account</Button>
        <Text className=" text-red-600">
          {" "}
          {block ? "Errore nella compilazione del form" : ""}{" "}
        </Text>
      </View>
    </View>
  );
}
