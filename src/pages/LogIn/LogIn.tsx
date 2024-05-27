import { Box, Container, TextField, Button, Typography, Link, FormControl, InputLabel } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";

const validationSchema = Yup.object({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   password: Yup.string().required("Password is required"),
});

export default function LogIn() {
   return (
      <Box display="flex" flexDirection="column" minHeight="100vh">
         <AppBar
            position="static"
            sx={{
               minWidth: "100%",
               top: 0,
               backgroundColor: "#444",
            }}
         >
            <Container maxWidth="lg">
               <Toolbar disableGutters>
                  <Box
                     sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                     }}
                  >
                     <Logo />
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 2 }}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Typography component="h1" variant="h1" mt={2} mb={3}>
                  Log in
               </Typography>
               <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/signup" color="primary.main">
                     Sign Up
                  </Link>
               </Typography>
               <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                     console.log(values);
                     setSubmitting(false);
                  }}
               >
                  {({ isSubmitting }) => (
                     <Form style={{ width: "100%", marginTop: "16px" }}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                           <InputLabel
                              shrink
                              htmlFor="email"
                              sx={{
                                 color: "white",
                                 fontSize: 20,
                              }}
                           >
                              Email Address
                           </InputLabel>
                           <Field
                              as={TextField}
                              id="email"
                              name="email"
                              autoComplete="email"
                              autoFocus
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              label=""
                              error={!!(<ErrorMessage name="email" />)}
                              helperText={<ErrorMessage name="email" />}
                              InputProps={{
                                style: {
                                   borderRadius: "10px",
                                },
                             }}
                           />
                        </FormControl>
                        <FormControl fullWidth margin="normal" variant="outlined">
                           <InputLabel
                              shrink
                              htmlFor="password"
                              sx={{
                                 color: "white",
                                 fontSize: 20,
                              }}
                           >
                              Password
                           </InputLabel>
                           <Field
                              as={TextField}
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              label=""
                              error={!!(<ErrorMessage name="password" />)}
                              helperText={<ErrorMessage name="password" />}
                              InputProps={{
                                 style: {
                                    borderRadius: "10px",
                                 },
                              }}
                           />
                        </FormControl>
                        <Button
                           type="submit"
                           size="large"
                           fullWidth
                           variant="contained"
                           sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
                           disabled={isSubmitting}
                        >
                           Log In
                        </Button>
                        <Box display="flex" justifyContent="center">
                           <Link href="#" variant="body2">
                              Forgot password?
                           </Link>
                        </Box>
                        <Typography>This site is protected by reCAPTCHA. Google Privacy Policy and Terms of Service apply.</Typography>
                     </Form>
                  )}
               </Formik>
            </Box>
         </Container>

         <Box mt="auto">
            <Footer />
         </Box>
      </Box>
   );
}
