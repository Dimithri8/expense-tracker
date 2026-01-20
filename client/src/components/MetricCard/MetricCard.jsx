import { Typography, Box, Paper } from "@mui/material";

export default function MetricCard({ title, amount, icon }) {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
      }}
    >
      {icon}
      <Box>
        <Typography
          component={"h3"}
          variant="h3"
          fontSize={"12px"}
          sx={{ color: "gainsboro" }}
        >
          {title}
        </Typography>
        <Typography variant="p" fontSize={"20px"} fontWeight={700}>
          {amount}
        </Typography>
      </Box>
    </Paper>
  );
}
