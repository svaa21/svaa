import { merienda } from '../fonts'
import { playball } from '../fonts'

export default function Page() {
  return (
    <div className='flex flex-col gap-y-12'>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repellat
        voluptatum. Ducimus quas ullam impedit totam cupiditate, quisquam sequi
        reiciendis magni omnis nesciunt explicabo dolorem voluptate, architecto
        ipsam quidem quibusdam.
      </span>
      <span className={`${merienda.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repellat
        voluptatum. Ducimus quas ullam impedit totam cupiditate, quisquam sequi
        reiciendis magni omnis nesciunt explicabo dolorem voluptate, architecto
        ipsam quidem quibusdam.
      </span>
      <span className={`${playball.className} text-xl`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repellat
        voluptatum. Ducimus quas ullam impedit totam cupiditate, quisquam sequi
        reiciendis magni omnis nesciunt explicabo dolorem voluptate, architecto
        ipsam quidem quibusdam.
      </span>
    </div>
  )
}
