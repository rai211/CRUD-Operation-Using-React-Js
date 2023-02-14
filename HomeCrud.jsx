import { Link } from "react-router-dom"
import style from "./home.module.css"

const HomeCrud =() =>{
    return(
        <section id={style.nav}>
            <Link to="/create" className={style.home}>Create</Link>
            <Link to="/user" className={style.home}>User</Link>
        </section>
    )
}
export default HomeCrud