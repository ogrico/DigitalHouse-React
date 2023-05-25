import React from 'react'
import axios from 'axios'
import { Card, Subtitle, Metric, Text, Divider, Grid } from "@tremor/react"

const apiProducts = async () => {
    const products = await axios.get("http://localhost:8086/api/products")
    const product = await axios.get("http://localhost:8086/api/products")
    return product.data
}
const apiUsers = async () => {
    const users = await axios.get("http://localhost:8086/api/users")
    let length = users.data.users.length - 1
    const user = await axios.get(users.data.users[length].detail)
    return user.data
}
const products = await apiProducts()
const user = await apiUsers()



function Detail() {
    return (
        <div className='p-10 flex justify-around'>
            <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2 pt-10">
                <Card className="max-w-lg mx-auto">
                    <Text>Ultimo usuario agregado</Text>
                    <Metric>{user.user.firstname + ' ' + user.user.lastname}</Metric>
                    <Divider />
                    <Subtitle>{user.user.email}</Subtitle>
                    <Text className="mt-2">
                        <img src={user.user.imgPublic} alt={user.user.avatar}/>
                    </Text>
                </Card>

                <Card className="max-w-lg mx-auto">
                    <Text>Ultimo producto agregado</Text>
                    <Metric>$ 34,743</Metric>
                    <Divider />
                    <Subtitle>Upgrades</Subtitle>
                    <Text className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor
                        lorem non est congue blandit. Praesent non lorem sodales, suscipit est
                        sed, hendrerit dolor.</Text>
                </Card>
            </Grid>
        </div>
    )
}

export default Detail