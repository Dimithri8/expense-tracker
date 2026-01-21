import {
  Button,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { PageContainer, PageHeaderToolbar } from "@toolpad/core/PageContainer";
import { useActivePage } from "@toolpad/core/useActivePage";

import AddIcon from "@mui/icons-material/Add";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import MetricCard from "../../components/MetricCard/MetricCard";
import { useMemo, useState } from "react";

function CustomPageHeader() {
  const activePage = useActivePage();
  const pageTitle = activePage.title || "Expenses";
  return (
    <PageHeaderToolbar
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography component={"h1"} variant="h1" fontSize={"32px"}>
        {pageTitle}
      </Typography>
      <Button variant="contained" startIcon={<AddIcon />}>
        Add Expense
      </Button>
    </PageHeaderToolbar>
  );
}
export default function Expenses() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const tableHeaders = [
    "Date",
    "Category",
    "Amount",
    "Paid Via",
    "Note",
    "Actions",
  ];
  const tableContent = [
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
    {
      date: "2026-06-15",
      category: "Groceries",
      amount: "30",
      paidVia: "cash",
      note: "Borrowed 5 bucks from Nate",
    },
  ];

  const visibleRows = useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return tableContent.slice(start, end);
  }, [page, rowsPerPage, tableContent]);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }
  function handleRowsPerPageChange(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  return (
    <PageContainer slots={{ header: CustomPageHeader }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <MetricCard
          title={"Total Expenses"}
          amount={"$3400"}
          icon={<AccountBalanceWalletIcon />}
        />
        <MetricCard
          title={"Bills"}
          amount={"$3400"}
          icon={<PointOfSaleIcon />}
        />
        <MetricCard
          title={"Groceries"}
          amount={"$3400"}
          icon={<ShoppingBasketIcon />}
        />
        <MetricCard
          title={"Entertainment"}
          amount={"$3400"}
          icon={<SmartDisplayIcon />}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((item) => (
              <TableRow>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.paidVia}</TableCell>
                <TableCell>{item.note}</TableCell>
                <TableCell>
                  <EditIcon sx={{ mr: 1, cursor: "pointer" }} />{" "}
                  <DeleteIcon sx={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                component={"div"}
                count={tableContent.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
