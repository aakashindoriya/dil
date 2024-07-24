import axios from "axios"
export const checkoutHandler = async () => {
    try {
        const { data: { order } } = await axios.post(`${process.env.REACT_APP_BASEURL}/payment/checkout`, {
                amount:100
        }, {
            headers: { Authorization: localStorage.getItem("token") }
        })
        
        const options = {
            key: process.env.REACT_APP_KEY,
            amount: order.amount,
            currency: "INR",
            name: "Dil",
            description: "best in class",
            image: "https://private-user-images.githubusercontent.com/37771235/253793094-74146519-b6a1-4847-a188-6a421a39f7ae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODk0OTYxMDAsIm5iZiI6MTY4OTQ5NTgwMCwicGF0aCI6Ii8zNzc3MTIzNS8yNTM3OTMwOTQtNzQxNDY1MTktYjZhMS00ODQ3LWExODgtNmE0MjFhMzlmN2FlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE2VDA4MjMyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTExM2IzZDg4NTgwYTA0OGFmZTk4NDkzZjVmYjFkYTYxMmI3OGMzMDBhOWUzYWVmOGFiYjRiMGY4ZGQ1Yjk5OWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fJLP4OxEW8OvZVorXiCuBNuPXs4xQja8vP49BqLO6x8",
            order_id: order.id,
            callback_url: `${process.env.REACT_APP_BASEURL}/payment/paymentverifcation`,
            prefill:"aakash" ,
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    } catch (error) {
        console.log(error)
    }


}