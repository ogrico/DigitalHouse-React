import React from 'react'
import axios from 'axios'
import { Card, Subtitle, Metric, Text, Divider, Grid } from "@tremor/react"

const apiProducts = async () => {
    const products = await axios.get("http://localhost:8086/api/products")
    let length = products.data.products.length - 1
    const product = await axios.get("http://localhost:8086/api/products/product/" + products.data.products[length].id)
    return product.data.product
}
const apiUsers = async () => {
    const users = await axios.get("http://localhost:8086/api/users")
    let length = users.data.users.length - 1
    const user = await axios.get(users.data.users[length].detail)
    return user.data
}
const product = await apiProducts()
const user = await apiUsers()
console.log(product.name)


function Detail() {
    return (
        <div className='p-10 flex justify-around'>
            <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2 pt-10">
                <Card className="max-w-lg mx-auto">
                    <Text>Ultimo usuario agregado</Text>
                    <Metric className='p-2'>{user.user.firstname + ' ' + user.user.lastname}</Metric>
                    <Divider />
                    <Subtitle>{user.user.email}</Subtitle>
                    <Text className="mt-2">
                        <img src={user.user.imgPublic} alt={user.user.avatar}/>
                    </Text>
                </Card>

                <Card className="max-w-lg mx-auto">
                    <Text>Ultimo producto agregado</Text>
                    <Metric className='p-2'>$ {product.name}</Metric>
                    <Divider />
                    <Subtitle>{product.type}</Subtitle>
                    <Text>$ {product.value}</Text>
                    <Text className="mt-2">{product.description}</Text>
                    <Divider />
                    <Subtitle><img src={product.publicimg1} alt={product.publicimg1}/></Subtitle>
                </Card>
            </Grid>
        </div>
    )
}

export default Detail