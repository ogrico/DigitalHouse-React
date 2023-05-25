import React from 'react'
import axios from 'axios'


const apiCategorys = async () => {
    const categorys = await axios.get("http://localhost:3010/api/products/categorys")
    return categorys.data.categorys
}

const categorys = await apiCategorys()
function Categories() {

    return (
        <div className='continer p-2 d-flex-colum'>
            <article className='d-flex justify-content-center'>
                <h2>Categorys</h2>
            </article>
            <article>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categorys</th>
                            <th scope="col">Element</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map((category, id) => (
                            <tr key={id}>
                                <th scope="row"> <a href="#"> {id + 1}</a> </th>
                                <td>{category.name}</td>
                                <td>{category.products.length}</td>
                                <td>{category.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </div>
    )

}



export default Categories