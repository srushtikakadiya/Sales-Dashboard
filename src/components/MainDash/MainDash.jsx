import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const mainDash = () => {
    return ( 
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards/>
            
            <Table/>
        </div>
     );
}
 
export default mainDash;