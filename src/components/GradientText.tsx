
const GradientText = ({text, from, to}:{text:string, from:string, to?:string}) => {
  return (
    <span className={`gradient-text ${from} ${to?to:'to-orange-400'}`}>
      {text}
    </span>
  )
}
export default GradientText
