// import React from 'react'
import {Button, Result} from 'antd'
import { useNavigate } from 'react-router-dom'

function Page404() {
    const navigate = useNavigate()
    const backHome =() => {
        navigate('/')
    }
  return (
    <div><Result
    status="403"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={backHome} type="primary">Back Home</Button>}
  /></div>
  )
}

export default Page404