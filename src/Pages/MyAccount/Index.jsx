import Layout from "../../Components/Layout"
import './styles.css'

function MyAccount() {
 
  return (
    <Layout>
        <h2>
          My Account
        </h2>
        <div className=" container mt-20 items-center bg-lime-600">
          <p className="font-light text-ms">
            My username
          </p>
          <div>
            <input type="text" placeholder="Username" className="mt-4 bg-lime-200 rounded-lg h-8 w p-2 border-none focus:outline-none"/>
          </div>
        <button className = 'w-full bg-lime-400 py-3 rounded-lg mt-4 mb-3 text-black font-ligth w-50' onClick={(event) => event.target.value}>
          Sent
        </button>
        </div> 

    </Layout>
    
  )
}

export default MyAccount
/*

<div className=" container mt-20 items-center bg-lime-600">
          <p className="font-light text-ms">
            My username
          </p>
          <div>
            <input type="text" placeholder="Username" className="mt-4 bg-lime-200 rounded-lg h-8 w p-2 border-none focus:outline-none"/>
          </div>
        <button className = 'w-full bg-lime-400 py-3 rounded-lg mt-4 mb-3 text-black font-ligth w-50' onClick={(event) => event.target.value}>
          Sent
        </button>
        </div> 

*/