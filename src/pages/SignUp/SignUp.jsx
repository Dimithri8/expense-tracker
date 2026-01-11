import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h1" sx={{ fontSize: 24 }}>
        Create your account
      </Typography>
      <Typography variant="p" sx={{ fontSize: 16, color: "gray" }}>
        Fill the below information to create your expense tracker account.
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
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            type="text"
            name="firstName"
            label="First Name"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            type="text"
            name="lastName"
            label="Last Name"
            variant="outlined"
            required
            fullWidth
          />
        </Box>

        <TextField type="email" name="email" label="Email" />
        <TextField type="password" name="password" label="Password" />
        <Box sx={{ mt: 1 }}>
          <Button type="button" variant="contained">
            Create Account
          </Button>
          <Typography
            component={"p"}
            sx={{ fontSize: 14, color: "grey", mt: 1 }}
          >
            Already have an account?{" "}
            <Link to="/" underline="hover" sx={{ cursor: "pointer" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
