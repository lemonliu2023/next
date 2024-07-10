import * as THREE from 'three'

export const isVector3 = (arg: unknown) => {
    return arg instanceof THREE.Vector3
}

export const isLikeVector3 = (arg: unknown): arg is [number, number, number] => { // 自定义保护的类型谓词
    return Array.isArray(arg) && arg.length === 3 && arg.every(item => typeof item === 'number')
}

export const transVector3 = (arg: unknown) => {
    if (isVector3(arg)) {
        return arg
    }
    if (isLikeVector3(arg)) {
        return new THREE.Vector3(...arg)
    }
    console.error('传入的坐标不符合规范，支持Vector3或者[number, number, number]')
    return new THREE.Vector3(0, 0, 0)
}