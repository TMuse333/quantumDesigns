import react from 'react'
import { tenetsData } from '../componentData/data'
import '../styles/tenetStar.css'

const Tenet = ({name,description}) => {

    

    return (
        <div className='tenet'>
            <h2 className='description-text'>
                {name}
            </h2>
            <p className='description-text'>
                {description}
            </p>
            </div>
    )
}


const TenetStar = () => {

    return (
        <div className='tenet-star-container'>

<div className='first-row'>
    <Tenet {...tenetsData[0]}/>
    <Tenet {...tenetsData[1]}/>

</div>

<div className='second-row'>
    
</div>




        </div>
    )


}

export default TenetStar