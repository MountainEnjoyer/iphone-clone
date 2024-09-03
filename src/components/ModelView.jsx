import { PerspectiveCamera, View } from '@react-three/drei';
import React, { Suspense } from 'react';
import Lights from './Lights';
import { div } from 'three/webgpu';
import IPhone from './IPhone';


const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View index={index} id={gsapType} className={`border-2 w-full h-full ${index === 2} ? 'right-[-100%] : '`}>

    //ambient light
    <ambientLight intensity={0.3}/>

    <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

    <Lights />

    <Suspense fallback={<div>Loading</div>}>
        <IPhone />
    </Suspense>

    </View>
)
}

export default ModelView