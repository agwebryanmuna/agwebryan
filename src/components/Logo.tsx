import GradientText from "@/components/GradientText.tsx";

const Logo = () => {
  return (
    <a href='/'>
      <h1 className='flex items-center justify-center rounded-full text-3xl font-bold w-10 h-10 bg-primary'><GradientText text={'B'} from={'from-yellow-300'} to={'to-orange-500'}/></h1>
    </a>
  )
}
export default Logo
