import { API_URL_RECEIPT, API_URL_SPEND } from "./constants";
import axios from "axios";
import { useState } from "react"

const Analytics = () => {

    const [transactions, setTransactions] = useState(null)

    axios.get(API_URL_SPEND).then((res) => {
        console.log(res.data)
    })

    return (
        <div></div>
    )
}

export default Analytics;