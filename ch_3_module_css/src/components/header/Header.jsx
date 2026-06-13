import HeaderStyle from "./Header.module.css";
const Header = () => {
  return (
    <div className={HeaderStyle.header}>
        <h3>Amrik Bhadra</h3>
        <button className={HeaderStyle.btn}>Login</button>
    </div>
  )
}

export default Header