import "../../css/propsComponent.css"

function PropsComponent(props)
{
    const styleAtt={
        backgroundColor:"brown",
        color:"white"
    }
    return(
        <div style={{backgroundColor:"plum"}}>
            Hello,{props.name}  {props.course} External css
            <h2 style ={styleAtt}>Internal css</h2>
        </div>
    )
    
}
export default PropsComponent