import {
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function AddExpenseForm({
  handleClose,
  open,
  date,
  category,
  amount,
  paidVia,
  note,
  handleChange,
  handleSubmit,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "fit-content",
        position: "absolute",
        top: "10%",
      }}
    >
      <Box
        sx={{
          p: 5,
          backgroundColor: "black",
          borderRadius: 2,
          width: "400px",
        }}
      >
        <Typography variant="h3" fontSize={20}>
          Fill details
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Transcation Date"
              value={date}
              name="date"
              onChange={(newValue) =>
                handleChange({ target: { name: "date", value: newValue } })
              }
            />
          </LocalizationProvider>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              value={category}
              name="category"
              onChange={handleChange}
            >
              <MenuItem value={"Groceries"}>Groceries</MenuItem>
              <MenuItem value={"Bills"}>Bills</MenuItem>
              <MenuItem value={"Travelling"}>Travelling</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={amount}
            type="text"
            name="amount"
            label="Amount"
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Paid Via</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Paid Via"
              value={paidVia}
              name="paidVia"
              onChange={handleChange}
            >
              <MenuItem value={"Card"}>Card</MenuItem>
              <MenuItem value={"Cash"}>Cash</MenuItem>
              <MenuItem value={"Cheque"}>Cheque</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Note"
            value={note}
            name="note"
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Add Expense
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
