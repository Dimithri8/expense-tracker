import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: 24,
        }}
      >
        Welcome back, login to track your expenses
      </Typography>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
          maxWidth: "500px",
        }}
      >
        <TextField name="email" type="email" label="Email" />
        <TextField name="password" type="password" label="Password" />
        <Box>
          <Button variant="contained">Login</Button>
          <Typography
            component={"p"}
            sx={{ fontSize: 14, color: "grey", mt: 1 }}
          >
            Don't have an account?{" "}
            <Link
              to="/create-account"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Create an Account
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
