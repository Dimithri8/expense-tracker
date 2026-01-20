import { Box, Button, Typography } from "@mui/material";
import { PageContainer, PageHeaderToolbar } from "@toolpad/core/PageContainer";
import { useActivePage } from "@toolpad/core/useActivePage";

function CustomPageHeader() {
  const activePage = useActivePage();
  const pageTitle = activePage.title || "Expenses";
  return (
    <PageHeaderToolbar
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography variant="h1" fontSize={"32px"}>
        {pageTitle}
      </Typography>
      <Button variant="contained" startIcon="">
        Add Expense
      </Button>
    </PageHeaderToolbar>
  );
}
export default function Expenses() {
  return <PageContainer slots={{ header: CustomPageHeader }}></PageContainer>;
}
