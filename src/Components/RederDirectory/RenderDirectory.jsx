import { useState } from 'react';
import folder from '../../assets/folder.svg'
import arrow from '../../assets/arrow.png'
import jsIcon from '../../assets/js.svg'
import './RenderDirectory.css'

function RenderDirectory({structure}) {
    const [isExpanded, setIsExpanded] = useState(false);

        if(structure){
            if(structure.isFolder){
                return(
                <>
                    <span className='folder' 
                          onClick={()=>{setIsExpanded(!isExpanded)}}
                    >
                        <img src={arrow} className={isExpanded && "down"} alt="folder-icon " />
                        <img src={folder} alt="folder-icon" />
                        {structure.name}
                    </span>
                    <div style={{paddingLeft:'14px'}}>
                        {isExpanded && structure.files.map((struct)=>(
                            <RenderDirectory structure={struct}/>
                        ))}
                    </div>
                </>
                )
            }
            else 
            return <div className='file'>
                            <img src={jsIcon} alt="file-icon" />
                            {structure.name}
                        </div>
        }
        return null;
    
}
export default RenderDirectory;

