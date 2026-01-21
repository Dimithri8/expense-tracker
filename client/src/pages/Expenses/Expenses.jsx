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
import { useMemo, useState } from "react";
import dayjs from "dayjs";

import AddIcon from "@mui/icons-material/Add";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import MetricCard from "../../components/MetricCard/MetricCard";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";

function CustomPageHeader({ handleOpen }) {
  const activePage = useActivePage();
  const pageTitle = activePage.title || "Expenses";
  return (
    <PageHeaderToolbar
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography component={"h1"} variant="h1" fontSize={"32px"}>
        {pageTitle}
      </Typography>
      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
        Add Expense
      </Button>
    </PageHeaderToolbar>
  );
}
export default function Expenses() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [expense, setExpense] = useState({
    date: dayjs(),
    category: "",
    amount: "",
    paidVia: "",
    note: "",
  });
  const [expenses, setExpenses] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setExpenses((prev) => [...prev, expense]);
    handleClose(true);
    setExpense({
      date: dayjs(),
      category: "",
      amount: "",
      paidVia: "",
      note: "",
    });
  }
  const tableHeaders = [
    "Date",
    "Category",
    "Amount",
    "Paid Via",
    "Note",
    "Actions",
  ];

  const visibleRows = useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return expenses.slice(start, end);
  }, [page, rowsPerPage, expenses]);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }
  function handleRowsPerPageChange(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <PageContainer
      slots={{ header: () => <CustomPageHeader handleOpen={handleOpen} /> }}
    >
      <AddExpenseForm
        open={open}
        handleClose={handleClose}
        date={expense.date}
        category={expense.category}
        amount={expense.amount}
        paidVia={expense.paidVia}
        note={expense.note}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
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
                <TableCell>{dayjs(item.date).format("DD/MM/YYYY")}</TableCell>
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
                count={expenses.length}
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
