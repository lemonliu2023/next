import { NavLink } from 'react-router-dom'

const Threejs = () => {
    return <div>
        <NavLink to={'/threejs/guide'}>guide</NavLink>
        &nbsp;
        <NavLink to={'/threejs/examples'}>examples</NavLink>
    </div>
}

export default Threejs