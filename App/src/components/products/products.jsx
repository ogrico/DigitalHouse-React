import React from 'react'
import axios from 'axios'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const apiProducts = async () => {
  const products = await axios.get("http://localhost:8086/api/products")
  return products.data
},
  products = await apiProducts()

function Products() {
  return (
    <div className='p-10'>
      <Card>
    <Title className='text-center'>Listado de productos</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Categoria</TableHeaderCell>
          <TableHeaderCell>Detalle</TableHeaderCell>
          <TableHeaderCell>Estado</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {products.products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              <Text>{product.category.name}</Text>
            </TableCell>
            <TableCell>
              <Text><a href='/'>{product.detail}</a></Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}> En Stock</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
    </div>
  )
}

export default Products