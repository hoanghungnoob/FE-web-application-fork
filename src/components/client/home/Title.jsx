const styleTitleMenu = {
    color: "var(--Neutral-07, #2C2F24)",
    fontFamily: "Playfair Display",
    fontSize: "55px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "60.5px" /* 110% */
  }
function Title ({title}){
    return (
        <h2 style={styleTitleMenu}>{title}</h2>
    )
}
export default Title;