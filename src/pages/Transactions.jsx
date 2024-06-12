import { useState } from "react";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2023-10-01", amount: 100, type: "income", category: "Nike" },
    { id: 2, date: "2023-10-02", amount: 150, type: "expense", category: "Adidas" },
  ]);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Button colorScheme="teal" onClick={() => alert("Add Transaction")}>
          Add Transaction
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.date}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.type}</Td>
                <Td>{transaction.category}</Td>
                <Td>
                  <Button size="sm" colorScheme="blue" onClick={() => alert("Edit Transaction")}>
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red" onClick={() => handleDelete(transaction.id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default Transactions;