import React from 'react'
import axios from 'axios'
import Detail from '../detail/detail'
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


const apiCategorys = async () => {
    const categorys = await axios.get("http://localhost:8086/api/products/categorys")
    return categorys.data.categorys
}

const categorys = await apiCategorys()
function Categories() {

    return (
        <div className='p-5 continer'>
            <Card>
                <Title className='text-center'>Categorias</Title>
                <Table className="mt-5">
                    <TableHead>
                        <TableRow>

                            <TableHeaderCell>#</TableHeaderCell>
                            <TableHeaderCell>Nombre</TableHeaderCell>
                            <TableHeaderCell>Elementos</TableHeaderCell>
                            <TableHeaderCell>Descripción</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categorys.map((category, id) => (
                            <TableRow key={category.id}>
                                <TableCell>{id + 1}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                    <Text>{category.products.length}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{category.description}</Text>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            <Detail />

        </div>
    )

}



export default Categories