import React, { useState } from 'react';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Checkbox, TextField } from '@mui/material';

interface Item {
  id: number;
  status: string;
  prioridade: string;
  ticket: string;
}

const SimpleTable = () => {
  const [data, setData] = useState<Item[]>([
    { id: 1, ticket: 'Ticket 1' ,prioridade: 'Media' ,status: 'Resolvido ' },
    { id: 2,  ticket: 'Ticket 2', prioridade: 'Tranquila ', status: 'Pedente'},
    { id: 3,ticket: 'Ticket 3', prioridade: 'Urgente',status: 'Pendente' },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (itemId: number) => {
    const isSelected = selectedItems.includes(itemId);

    if (isSelected) {
      setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, itemId]);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Ticket</TableCell>
              <TableCell>Prioridade</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                {Object.values(item).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
                <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SimpleTable;
  