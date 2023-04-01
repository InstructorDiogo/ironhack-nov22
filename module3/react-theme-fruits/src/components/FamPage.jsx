import FamMember from './FamMember'
import { useState } from 'react'

function FamPage() {

    const [ageGranny, setAgeGranny] = useState(50)
    const [ageKid, setAgeKid] = useState(10)
    const [ageTeen, setAgeTeen] = useState(15)
    const [ageUncle, setAgeUncle] = useState(40)

    function handleClick(){
        setAgeGranny( ageGranny + 1 )
        setAgeKid( ageKid + 1 )
        setAgeTeen( ageTeen + 1 )
        setAgeUncle( ageUncle + 1 )
    }

    return (
        <div>
            <FamMember title="Granny" age={ageGranny} />
            <FamMember title="Kid" age={ageKid} />
            <FamMember title="Teen" age={ageTeen} />
            <FamMember title="Uncle" age={ageUncle} />

            <button onClick={handleClick}> Increase Age </button>
        </div>
    )

}

export default FamPage