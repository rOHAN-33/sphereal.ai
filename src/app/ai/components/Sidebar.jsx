import Image from 'next/image'
import React from 'react'
import {assets} from '../../../../public/assets/assets'
const Sidebar = ({expand, setExpand}) => {
  return (
    <div>
        <div>
            <div>
                <Image src={expand ?assets.}>

                </Image>
            </div>
        </div>
    </div>
  )
}

export default Sidebar