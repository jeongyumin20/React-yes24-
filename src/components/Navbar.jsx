// Navbar.jsx (src)

export default function Navbar() {
  const list = ['종합', '실시간', '일별', '월별/주별', '특가', '스테디'];
  const menuHandler = (e) => {
    alert('handler')
  }

  return(
    <div className='navbar'>
      <ul>
        { list.map((item) => {
          return <li key={item} onClick={menuHandler}>{item}</li>
        })}
      </ul>
    </div>
  );
}