import { UpdatesData } from "../../Data/Data";
import './Update.css'
const Updates = () => {
    return ( 
           <div className="Updates">
                {UpdatesData.map((update)=>{
                    return(
                        <div className="update">
                            <img src={update.img} alt=""/>
                            <div className="note">
                                <div style={{marginBottom: '0.5rem'}}>
                                    <span>{update.name}</span>
                                    <span>{update.note}</span>
                                </div>
                            </div>
                        </div>

                    )
                })}
           </div>
     );
}
   
export default Updates;