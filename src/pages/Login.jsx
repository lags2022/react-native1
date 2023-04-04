import { View, Button, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -10,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  //el field es el valor del campoj como el email, meta es la metainformaciond el campo como errores, y el helpers es el setvalue y el seterror
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   console.log(errors);
//   return errors;
// };

export default function LogInPage() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      // validate={validate}
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
