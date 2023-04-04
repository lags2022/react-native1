import { View, Button, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";

const FormikInputValue = ({ name, ...props }) => {
  //el field es el valor del campoj como el email, meta es la metainformaciond el campo como errores, y el helpers es el setvalue y el seterror
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {/* en una renderprops devuelve lo que tiene que ejecutar */}
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.form}>
          <FormikInputValue placeholder="E-mail" name="email" />
          <FormikInputValue
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          {/*el secureTextEntry es para que lo punto aparecezca en ***** */}
          <Button onPress={handleSubmit} title="Sign in" />
        </View>
      )}
    </Formik>
  );
}
