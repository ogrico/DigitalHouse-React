import React from 'react'
import axios from 'axios'
import { Grid, Card, Text, Metric, BarList, Bold, Title, Flex } from "@tremor/react";

const apiProducts = async () => {
    const products = await axios.get("http://localhost:8086/api/products")
    return products.data
}
const apiUsers = async () => {
    const users = await axios.get("http://localhost:8086/api/users")
    return users.data
}
const apiCategorys = async () => {
    const categorys = await axios.get("http://localhost:8086/api/products/categorys")
    return categorys.data.categorys
}
const products = await apiProducts()
const users = await apiUsers()
const categorys = await apiCategorys()

const data = []
categorys.forEach(element => {
    data.push({
        "name": element.name,
        "value": element.products.length,
        "icon": function GoogleIcon() {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-blue-500" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
	c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
	C15.172,39.813,15.172,40.446,15.563,40.836z" />

                </svg>
            );
        }
    })
})
function DashBase() {
    return (
        <div>
            <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2 pt-10">


                <Card decoration="top" decorationColor="blue">
                    <Text>Usuarios</Text>
                    <Metric>Total: {users.records}</Metric>
                </Card>

                <Card decoration="top" decorationColor="blue">
                    <Text>Productos</Text>
                    <Metric>Total: {products.records}</Metric>
                </Card>
                <Card decoration="top" decorationColor="blue">
                    <Text>Categorias</Text>
                    <Metric>Total: {categorys.length}</Metric>
                </Card>

            </Grid>
            <div className='m-10 flex justify-around'>
                <Card className="max-w-lg">
                    <Title>Categorias</Title>
                    <Flex className="mt-4">
                        <Text>
                            <Bold>Nombre</Bold>
                        </Text>
                        <Text>
                            <Bold>Cantidad</Bold>
                        </Text>
                    </Flex>
                    <BarList data={data} className="mt-2" />
                </Card>
            </div>


        </div>


    )
}

export default DashBase